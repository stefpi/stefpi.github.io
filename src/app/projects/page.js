import Link from "next/link";
import getPostMetadata from "@/lib/posts";

import ProjectLayout from "./projectlayout";

import "./page.css";

export default function Projects({ allPostsData }) {
  const posts = getPostMetadata();
  return (
    <ProjectLayout>
      <div className="postListings">
        {posts.map(({ id, date, title, desc, tags }) => (
          <div className="postListing" key={id}>
            <div className="postHeader">
              <Link href={`/projects/${id}`}>
                <h3>{title}</h3>
              </Link>
              <div className="postSubHeader">
                <h5>{date}</h5>
                <div className="postTags">
                  {tags.map((tag, index) => {
                    return(
                      <div className="postTag" key={ index }>
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <p>{'>'} {desc}</p>
          </div>
        ))}
      </div>
    </ProjectLayout>
  );
}
