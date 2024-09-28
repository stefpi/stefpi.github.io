import Image from "next/image";
import Link from "next/link";

import Content from '/markdown/about.md';

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
      <Content />
    </div>
  );
}
