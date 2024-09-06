"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Tabs() {
  const [currTab, setCurrTab] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("currTab") || "0", 10);
    }
    return 0;
  });

  useEffect(() => {
    // Update localStorage whenever currTab changes
    localStorage.setItem("currTab", currTab);
  }, [currTab]);

  return (
    <div className="bg-[#181818] text-[#D4D4D4] fixed top-[68px] md:top-[76px] left-8 md:left-12 mb-4 w-full">
      <div className="flex justify-between relative">
        <ul className="flex gap-3 md:gap-10 p-[6px] text-[#FF5722]">
          <Link href={"/"}>
            <li
              onClick={() => setCurrTab(0)}
              className={currTab === 0 ? "animate-pulse" : ""}
            >
              About Me
            </li>
          </Link>
          <Link href={"/education"}>
            <li
              onClick={() => setCurrTab(1)}
              className={currTab === 1 ? "animate-pulse" : ""}
            >
              Education
            </li>
          </Link>
          <Link href={"/projects"}>
            <li
              onClick={() => setCurrTab(2)}
              className={currTab === 2 ? "animate-pulse" : ""}
            >
              Projects
            </li>
          </Link>
          <Link href={"/connect"}>
            <li
              onClick={() => setCurrTab(3)}
              className={currTab === 3 ? "animate-pulse" : ""}
            >
              Connect
            </li>
          </Link>
        </ul>
        <ul className="hidden md:flex gap-2 p-2 absolute right-[60px]">
          <li>
            <Image
              src="/images/codicon--play.png"
              alt="Icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/images/codicon--git-compare.png"
              alt="Icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              src="/images/codicon--split-horizontal.png"
              alt="Icon"
              width={20}
              height={20}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
