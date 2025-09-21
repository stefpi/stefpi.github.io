import Image from "next/image";
import Link from "next/link";

import "./page.css";

export default function About() {
  return (
    <div id="about">
      <Link href="/">
        <Image
          aria-hidden
          src="/static/images/spikeheadwhite.svg"
          alt="spike head global"
          width={150}
          height={150}
          priority={true}
        />
      </Link>
      <b>A site about stuff that I have done so I can remember it.</b>
      <div className="blurb">
        <p>
          My name is Stefan. Slowly I am acquiring more knowledge in computer science, distributed computing,
          machine learning, design and electronics.
        </p>
      </div>
      <p><b>what I have been up to</b></p>
      <div className="experience">      
        {
          [
            {
              title: "software developer",
              place: "distributive",
              description: "working on distributed computing across edge devices by leverging the browser web stack."
            },
            {
              title: "android app developer",
              place: "arboreal systems",
              description: "making android apps for interfacing with custom made power distribution microcontrollers built for motorcycles."
            },
            {
              title: "backend developer",
              place: "infera",
              description: "designing interative and interoperable ai agents running on a distributed LLM inferencing network."
            },
            {
              title: "chief of web development",
              place: "qmind",
              description: "cultivating the look of the digital face of Canada's largest undergraduate artificial intelligence organization."
            }
          ].map((card, index) => {
            return (
              <div className="card" key={ index }>
                <div className="cardHeader">
                  <p><u><i>{card.title}</i> @ <b>{card.place}</b></u></p>
                </div>
                <div className="cardBody">
                  <p>{card.description}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
