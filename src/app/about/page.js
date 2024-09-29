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
      <p>
        A site about everything cool that I have done so I can remember.
      <br /><br />
        I hope this site can help someone else do some cool shit too.
      </p>
    </div>
  );
}
