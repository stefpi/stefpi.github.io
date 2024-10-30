import getPostMetadata from "@/lib/posts";
import fs from 'fs';
import matter from "gray-matter";

import ProjectLayout from "../projectlayout";

import "./page.css";
import Markdown from "markdown-to-jsx";

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

export default function Projects(props) {
  const slug = props.params.slug
  const post = getPostContent(slug)
  console.log(post)
  return (
    <ProjectLayout>
      <article id="article">
        <h1 style={{textAlign: "center"}}>{post.data.title}</h1>
        <Markdown>{post.content}</Markdown>
      </article>
    </ProjectLayout>
  );
}
