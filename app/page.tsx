"use client";

import { Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="flex flex-col pl-16 justify-center h-screen">
        <motion.div className="font-extrabold font-lg text-[66px] w-[85%]"
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        >
          <h1>
            Inspiring
            <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-tr from-[#fff456] to-[#ff8800]">
              students&nbsp;
            </span>
             through research and competitions.
          </h1>
          <p className="flex flex-row gap-4 w-[95%] dark:text-gray-300 text-gray-500 items-center text-[16.5px] font-normal">
            <Handshake size={50} />
            Horizon Labs is a 501(c)(3) not-for-profit organization that address
            the issue of a lack of STEM majors through the creation of research
            programs and competitions.
          </p>
        </motion.div>
      </div>

      {/* Trusted Sponsors Section */}
      <div className="trusted flex flex-col pl-16 justify-center min-h-[40vh] bg-gradient-to-b dark:from-[#1b1b1b] dark:to-[#0e0e0e] h-[25vh]">
        <div className="flex flex-row gap-10 w-[95%] items-center text-[16.5px] font-normal justify-center">
          <p className="font-extrabold font-lg text-[30px]">Sponsored by</p>
          <Link href="https://digitalocean.com">
            <Image
              src="/assets/DigitalOcean.png"
              alt="Digital Ocean Logo"
              width={150}
              height={100}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
