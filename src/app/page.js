import Image from "next/image";
import Link from "next/link";
import { VT323 } from "next/font/google";

import "./page.css";

const vt323 = VT323({ subsets: ["latin"], weight: ['400'] });

export default function Home() {
  return (
    <div id="home" className={vt323.className}>
      <Image
          aria-hidden
          src="/static/images/spikeheadwhite.svg"
          alt="spike head global"
          width={300}
          height={300}
        />
      <Link href="/about">
        <h1>about</h1>
      </Link>
      <Link href="/projects">
        <h1>explorations</h1>
      </Link>
      <Link href="/designs">
        <h1>designs</h1>
      </Link>
    </div>
  );
}
