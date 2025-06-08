import Image from "next/image";

import ProjectLayout from "@/layouts/ProjectLayout";

import "./page.css"

export default function Designs() {

  const images = [
    "/static/designs/2.png ",
    "/static/designs/1.png ",
    "/static/designs/4.jpg ",
    "/static/designs/3.png ",
    "/static/designs/7.png ",
    "/static/designs/6.png ",
    "/static/designs/9.png ",
    "/static/designs/8.png ",
    "/static/designs/13.png", 
    "/static/designs/12.png", 
    "/static/designs/15.JPG",
    "/static/designs/14.JPG", 
    "/static/designs/16.png",
    // "/static/designs/5.png ",
    "/static/designs/10.png", 
  ]

  return (
    <ProjectLayout title="designs">
      <div id="designs">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img src={image} alt={`Gallery ${index}`} className="image"/>
          </div>
        ))}
      </div>
    </ProjectLayout>
  )
}