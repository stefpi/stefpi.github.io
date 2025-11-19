import Image from "next/image";
import Link from "next/link";

import "./page.css";

export default function Home() {

  const jobs = [
    {
      title: "embedded systems engineer",
      description: [
        "making apps for interfacing with power distribution modules for vehicles.",
        "developing application layer protocol for microcontroller communication over CANFD."
      ]
    },
    {
      title: "chief technology officer",
      description: [
        "created novel mechanical, electrical and plumbing (mep) auto-routing schematic design software for residential construction"
      ]
    },
    {
      title: "software developer",
      description: ["working on distributed computing across edge devices by leverging the browser web stack."]
    },
    {
      title: "backend developer",
      description: ["designing interative and interoperable ai agents running on a distributed LLM inferencing network."]
    },
    {
      title: "chief of web development",
      description: ["cultivating the look of the digital face of Canada's largest undergraduate artificial intelligence organization."]
    }
  ]

  return (
    <div id="about" className="full-container">
      <div className="image">
        <Link href="/">
          <Image
            aria-hidden
            src="/static/images/spikeheadperson.svg"
            alt="spike head global"
            width={0}
            height={0}
            priority={true}
          />
        </Link>
      </div>
      <div className="content">
        <p>A site about stuff that I have done so I can remember it.</p>
        <b>
          My name is Stefan. I am actively learning and producing things related to topics in computer science, distributed computing, machine learning, design and electronics.
        </b>
        <h6>check out <a href="/blog"><u>/blog</u></a> to see what I have been interested in recently.</h6>

        <hl />

        <p><b>currently working as</b></p>
        <div className="experience"> 
          <div className="card">
            <div className="cardHeader">
              <p><u><i>{jobs[0].title}</i></u></p>
            </div>
            <div className="cardBody">
              {jobs[0].description.map((desc, index) => (
                <p key={ index }> {`>`} {desc}</p>
              ))}
            </div>
          </div>
        </div>
        
        <hl />

        <p><b>previously was</b></p>
        <div className="experience">      
          {
            jobs.slice(1).map((card, index) => {
              return (
                <div className="card" key={ index }>
                  <div className="cardHeader">
                    <p><u><i>{card.title}</i></u></p>
                  </div>
                  <div className="cardBody">
                    {card.description.map((desc, index) => (
                      <p key={ index }> {`>`} {desc}</p>
                    ))}
                  </div>
                </div>
              );
            })
          }
        </div>
        {/* <h6>check out <a href="/projects"><u>/projects</u></a> to see some of the results of these jobs and some other cool projects</h6> */}

        <hl />

      </div>
    </div>
  );
}
