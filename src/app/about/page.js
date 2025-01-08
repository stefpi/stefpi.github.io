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
          My name is Stefan, and I am fourth year computer science student. Somewhere along the way, I realized that
          most cool things aren't learned in school and that if I waited for such knowledge to come to me, I may
          be waiting forever. Slowly I hope to acquire more knowledge in computer science, distributed computing,
          machine learning, design and electronics.
          <br/><br/>
          My blog posts may include rambling and sometimes incoherent nonsense. I try my best to not do such things,
          but sometimes I think that it is better to get everything out quickly then to dwell on it and eventually
          lose the willingness to finish. The purpose of this site is not to be a source of truth, but to concretely explore
          interesting ideas (albeit maybe not original ideas) in writing and maybe, just maybe, help someone else start or continue exploring a topic.
          <br/><br/>
          I hope this site can give you some inspiration to do something too!
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
