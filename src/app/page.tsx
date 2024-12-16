'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { getCookie, setCookie } from "cookies-next";
import Footer from "@/components/Footer";

export default function Home() {
  // Fancy loading screen
  const [loadingStatus, setLoadingStatus] = useState(true);
  useEffect(() => {
    setTimeout(async () => {
      if (getCookie('platformVersion') == undefined) {
        setCookie('platformVersion', (await (await fetch('/api')).json()).apiVersion)
        setLoadingStatus(false)
      } else {
        setLoadingStatus(false)
      }
    }, 0)
  },[])
  
  // Value
  return (
     <>
        <div className={`${loadingStatus ? 'visible' : 'hidden'} bg-blue-700 w-[100vw] h-[100vh] flex justify-center flex-col items-center text-white`}>
          <Image src={'/HorizonLabsLogo.png'} alt="Horizon Labs Logo" width={150} height={150} className="animate-pulse" />
          {/* <p className="absolute bottom-0 mb-5 m-3 text-left">Having issues with the Network? Check the <Link className="underline" href={'https://status.irpo.net'}>server status</Link>.</p> */}
        </div>
        <motion.main initial={{opacity: 0}}
        animate={{opacity: loadingStatus ? 0 : 1}}
        transition={{duration: 1}}
        className="bg-blue-700 text-white"
        > 
        <main className={`bg-blue-700 text-white ${loadingStatus ? 'hidden' : 'visible'} transition-all`}>
          <Navbar />
          <div>
          <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-b text-white"> <div className="container mx-auto px-6 text-left">
              <h1 className="text-4xl md:text-6xl font-black mb-8">
              Empowering students to succeed through research and competitions.
              </h1>
                <a  className="bg-gray-100 text-blue-800 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 select-none">
                  Coming Soon
                </a>
              </div>
            </section>
            <section  className="bg-gradient-to-b from-blue-700 to-blue-800 min-h-[30vh] flex justify-center">
              {/* <h1>From one Network, to the next</h1> */}
            </section>
          </div>
        </main>
        <Footer />
        </motion.main>
      </>
    );
}
