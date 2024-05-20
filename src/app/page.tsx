


import Image from "next/image";

import NavLink from "@/components/ui/nav-links";
import { Button } from "@/components/ui/button";
import FooterTwo from "@/components/ui/footer";
import Link from "next/link";
import { anton } from "@/components/ui/fonts";





export default async function HomePage() {


  return (
    <div className="text-center">
     
      
     <NavLink /> 

      
      <div className="flex items-center justify-center space-x-6">
        
        <div className="bg-yellow-500 border-black border-2 flex items-center justify-center space-x-2 rounded-xl">
        
        <div className="rounded-full overflow-hidden w-48 h-48 mr-5 ml-5 mt-5 mb-5 bg-white shadow-xl outline-solid">
          <Image
           
           src="/mypic00.png"

            layout="intrinsic"
            alt="my picture 1"
            width={300}
            height={400}
          
          /> 
        </div>
        
          <div className="flex flex-col items-center justify-center pl-1 pr-8 mr-10">
          <div><p className="text-xl">Hello I am</p></div>
          <div><p className={`${anton.className} text-4xl text-white`}>A. GONZALEZ</p></div>
          <div><p className="text-xl">Web Developer</p></div>
        
          </div>  
          </div>
        </div>

        
        <br/>
        <Link href="/contact/contact-me">
          <Button className={`${anton.className} mt-6 text-xl border-red-400 border-2 bg-yellow-500 text-red-600 shadow-xl rounded hover:bg-gray-200`}>Contact me</Button>
        </Link> 

        <div className="flex justify-center mt-5"> 
        <div className="flex items-center justify-center rounded-full w-48 h-48 mr-5 ml-5 mt-5 mb-5 bg-transparent outline-solid">
          <Image
            src="/arcreactor.png"
            layout="intrinsic"
            alt="arc reactor"
            width={150}
            height={300}
            
          />
        </div>
        </div>
      
        <FooterTwo />    

        
        
        
    </div>
     
  );
}

