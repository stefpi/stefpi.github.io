import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";

import "./ProjectLayout.css";

export default function ProjectLayout({ title, children }) {
  // const router = useRouter();

  // const handleBackClick = () => {
  //   router.back();
  // }
  
  return (
    <div id="ProjectLayout">
      <header>
        {/* <button onClick={handleBackClick}>
          <Image
            src="/static/images/back.svg"
            alt="back"
            width={0}
            height={0}
            className="back"
          />
        </button> */}
        <Link href="/">
          <Image
            aria-hidden
            src="/static/images/spikeheadwhite.svg"
            alt="spike head global"
            width={75}
            height={75}
            priority={true}
          />
        </Link>
        <p>{title}</p>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}