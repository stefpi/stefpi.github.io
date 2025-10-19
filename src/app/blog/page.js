import getPostMetadata from "@/lib/posts";

import ProjectLayout from "@/layouts/ProjectLayout";
import ProjectList from "./projectList";

import "./page.css";

export default function Blogs() {
  const posts = getPostMetadata();

  return (
    <ProjectLayout title="blog/explorations">
      <ProjectList posts={posts} />
    </ProjectLayout>
  );
}
