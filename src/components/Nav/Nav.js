"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import "./Nav.css";

export default function Nav() {
  const selector = useRef();
  const pathname = usePathname();
  
  useEffect(() => {
    if (selector.current) {
      selector.current.style.visibility = "visible";

      // if (pathname.includes('about')) {
      //   selector.current.style.top = "32px";
      // } else if (pathname.includes('projects')) {
      //   selector.current.style.top = "59px";
      // } else if (pathname.includes('blog')) {
      //   selector.current.style.top = "85px";
      // } else if (pathname.includes('gallery')) {
      //   selector.current.style.top = "113px";
      // } else {
      //   selector.current.style.visibility = "hidden";
      // }

      if (pathname.includes('about')) {
        selector.current.style.top = "32px";
      } else if (pathname.includes('blog')) {
        selector.current.style.top = "59px";
      } else if (pathname.includes('gallery')) {
        selector.current.style.top = "85px";
      } else {
        selector.current.style.visibility = "hidden";
      }
    }
  }, [pathname])

  return (
    <div id="nav">
      <div className="nav-links">
        <Image
          aria-hidden
          src="/static/images/spikeheadwhite.svg"
          alt="spike head global"
          width={15}
          height={15}
          className="selector"
          ref={selector}
        />
        <Link href="/">
          <h3>home</h3>
        </Link>
        <Link href="/about">
          <h3>about</h3>
        </Link>
        {/* <Link href="/projects">
          <h3>projects</h3>
        </Link> */}
        <Link href="/blog">
          <h3>blog</h3>
        </Link>
        <Link href="/gallery">
          <h3>gallery</h3>
        </Link>
      </div>
      <div className="nav-end">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}
