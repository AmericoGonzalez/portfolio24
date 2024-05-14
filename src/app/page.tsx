


import Image from "next/image";
import Link from "next/link";
import mypic1 from "/public/mypic00.png";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { useState } from "react";


export default async function HomePage() {

  

  return (
    <div className="text-center">
     
      
      <div className="flex justify-center space-x-6 mb-16 mt-2 p-6 md:shadow-md">
        <Link href="/">
          <span className="text-xl cursor-pointer hover:text-sky-600">Home</span>
        </Link>
        <Link href="/resume/my-resume">
          <span className="text-xl cursor-pointer hover:text-sky-600">Resume</span>
        </Link>
        <Link href="/projects/my-projects">
          <span className="text-xl cursor-pointer hover:text-sky-600">Projects</span>
        </Link>
        <Link href="/aboutme/about-me">
          <span className="text-xl cursor- hover:text-sky-600">About</span>
        </Link>
      </div>

      
      <div className="flex items-center justify-center space-x-6">
        
        <div className="bg-gray-200 flex items-center justify-center space-x-2 rounded-xl">
        
        <div className="rounded-full overflow-hidden w-48 h-48 mr-5 ml-5 mt-5 mb-5 bg-green-300 hover:bg-sky-600 shadow-xl outline-solid">
          <Image
            src={mypic1}
            layout="intrinsic"
            alt="my picture 1"
            width={300}
            height={400}
          
          /> 
        </div>
        
          <div className="flex flex-col items-center justify-center pl-3 pr-7 mr-10">
          <div><p className="text-xl">Hello I am</p></div>
          <div><p className="text-2xl font-bold text-sky-600">A. Gonzalez</p></div>
          <div><p className="text-xl">Web Developer</p></div>
        
          </div>  
          </div>
        </div>

        
        <br/>
        <Link href="/contact/contact-me">
          <Button className="mt-10 text-xl border-green-400 border-2 bg-green-300 text-sky-600 shadow-xl rounded hover:bg-gray-200">Contact me</Button>
        </Link> 
      
        <Footer />    

        
        
        
    </div>
     
  );
}

