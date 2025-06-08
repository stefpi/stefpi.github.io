import getPostMetadata from "@/lib/posts";

import ProjectLayout from "@/layouts/ProjectLayout";
import ProjectList from "./projectList";

import "./page.css";

export default function Projects() {
  const posts = getPostMetadata();

  return (
    <ProjectLayout title="projects/explorations">
      <ProjectList posts={posts} />
    </ProjectLayout>
  );
}
