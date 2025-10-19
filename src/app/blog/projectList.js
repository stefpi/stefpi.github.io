"use client"

import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from "react";

import "./page.css";

export default function ProjectList(props) {
  const [posts, setPosts] = useState(props.posts);
  const [selectedTags, setSelectedTags] = useState([]);

  function getAllTags() {
    const tagsSet = new Set();

    props.posts.forEach(post => {
      post.tags.forEach(tag => {
        tagsSet.add(tag);
      });
    });

    return Array.from(tagsSet);
  }

  const tags = getAllTags();

  function handleTagClick(event) {
    if (selectedTags.includes(event.target.innerText)) {
      event.target.setAttribute('selected', 'false')
      setSelectedTags(prevItems => prevItems.filter(item => item != event.target.innerText));
    } else {
      event.target.setAttribute('selected', 'true')
      setSelectedTags(prevItems => [...prevItems, event.target.innerText]);
    }
  }

  useEffect(() => {
    setPosts(props.posts.filter(item => {
      if (selectedTags.length == 0) {
        return true
      } else {
        for (const idx in item.tags) {
          if (selectedTags.includes(item.tags[idx])) {
            return true
          }
        }
        return false
      }
    }))
  }, [selectedTags])

  return (
    <div id="projectList">
      <div className="tagListings">
        {tags.map((tag, index) => (
          <button className="postTagLarge" key={ index } onClick={handleTagClick}>
            {tag}
          </button>
        ))}
      </div>
      <div className="postListings">
        {posts.map(({ id, date, title, desc, tags }) => (
          <div className="postListing" key={id}>
            <div className="postHeader">
              <Link href={`/blog/${id}`}>
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
    </div>
  )
}