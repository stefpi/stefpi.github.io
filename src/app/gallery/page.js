import Image from "next/image";

import ProjectLayout from "@/layouts/ProjectLayout";

import "./page.css"

export default function Designs() {

  const designs = [
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

  const movie_scenes = [
    "/static/movies/1883.jpg",
    "/static/movies/death_star.jpeg",
    "/static/movies/interstellar.jpg",
    "/static/movies/the_campaign.jpg",
  ]

  return (
    <ProjectLayout title="gallery">
      <center><h3> designs </h3></center>
      <div id="designs">
        {designs.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="image"/>
        ))}
      </div>
      <br />
      <center><h3> favourite movie shots </h3></center>
      <div id="designs">
        {movie_scenes.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} className="scene"/>
        ))}
      </div>
    </ProjectLayout>
  )
}