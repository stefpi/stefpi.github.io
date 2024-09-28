import fs from 'fs';
import matter from 'gray-matter';

export default function getPostMetadata() {
    const folder = './src/markdown/projects/'
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'));
    
    const posts = markdownPosts.map((filename) => {
      const id = filename.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(`./src/markdown/projects/${filename}`, 'utf8')
      const matterResult = matter(fileContents)
      return {
        id,
        ...matterResult.data,
      };
    })
    return posts.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}