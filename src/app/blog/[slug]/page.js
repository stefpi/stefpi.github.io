// "use client"
import getPostMetadata from "@/lib/posts";
import fs from "fs";
import matter from "gray-matter";
import markdownit from "markdown-it";
import katex from "katex";
import parse from "html-react-parser"

import ProjectLayout from "@/layouts/ProjectLayout";

import "./page.css";

function getPostContent(slug) {
  const folder = 'src/markdown/projects/'
  const file = folder + `${slug}.md`
  const content = fs.readFileSync(file, 'utf8')

  const matterResult = matter(content)
  return matterResult
}

export async function generateStaticParams() {
  const posts = getPostMetadata()
  return posts.map((post) => ({ slug: post.id }))
}

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? ' ⋅ ' + params?.slug : ''
  return {
      title: `stefpi ${id.replaceAll('_', ' ')}`
  }
}

function katexRenderer(displayMode) {
  return (tokens, i) => katex.renderToString(tokens[i].content, { displayMode });
}

export default function Projects(props) {
  const md = markdownit({ html: true });

  function addKatexInlineRule(regex) {
    md.inline.ruler.before("escape", "math_inline", (state, silent) => {
        regex.lastIndex = state.pos;
        const match = regex.exec(state.src);
        if (match === null) return false;
        if (!silent) {
            const token = state.push("math_inline", "math", 0);
            token.content = match[1];
        }
        state.pos = regex.lastIndex;
        return true;
    });
  }
  
  function findLineIndex(state, startLine, endLine, charIndex) {
    for (let i = startLine; i < endLine; ++i) {
        const startIndex = state.bMarks[i] + state.tShift[i];
        if (startIndex <= charIndex && charIndex <= state.eMarks[i]) {
            return i;
        }
    }
}

  function addKatexBlockRule(regex) {
    md.block.ruler.before("fence", "math_block",
        (state, startLine, endLine, silent) => {
            regex.lastIndex =
                state.bMarks[startLine] + state.tShift[startLine];
            const match = regex.exec(state.src);
            if (match === null) return false;
            if (!silent) {
                const lastLine = findLineIndex(
                    state, startLine, endLine, regex.lastIndex - 1
                );
                const oldParentType = state.parentType;
                const oldLineMax = state.lineMax;
                state.lineMax = lastLine;
                state.parentType = "math";
                let token = state.push("math_block", "math", 0);
                token.block = true;
                token.content = match[1];
                token.map = [startLine, lastLine + 1];
                state.parentType = oldParentType;
                state.lineMax = oldLineMax;
                state.line = lastLine + 1;
            }
            return true;
        }
    );
  }
  
  addKatexInlineRule(/\$((?:[^\s\\])|(?:\S.*?[^\s\\]))\$/gy);
  addKatexInlineRule(/\\\((.+?)\\\)/gy);
  addKatexBlockRule(/\\\[([\s\S]+?)\\\]/gmy);
  addKatexBlockRule(/\${2}([^$]*?[^\\])\${2}/gmy);

  md.renderer.rules.math_inline = katexRenderer(false);
  md.renderer.rules.math_block = katexRenderer(true);
  
  const slug = props.params.slug
  const post = getPostContent(slug);

  const result = md.render(post.content);

  return (
    <ProjectLayout title="projects/explorations">
      <article id="article">
        <h1 style={{textAlign: "center"}}>{post.data.title}</h1>
        <div>{parse(result)}</div>
      </article>
    </ProjectLayout>
  );
}
