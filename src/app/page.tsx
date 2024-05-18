


import Image from "next/image";

import NavLink from "@/components/ui/nav-links";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import Link from "next/link";



export default async function HomePage() {


  return (
    <div className="text-center">
     
      
     <NavLink /> 

      
      <div className="flex items-center justify-center space-x-6">
        
        <div className="bg-gray-200 border-sky-200 border-2 flex items-center justify-center space-x-2 rounded-xl">
        
        <div className="rounded-full overflow-hidden w-48 h-48 mr-5 ml-5 mt-5 mb-5 bg-green-300 hover:bg-sky-600 shadow-xl outline-solid">
          <Image
           
           src="/mypic00.png"

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

