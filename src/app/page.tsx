


import Image from "next/image";

import NavLink from "@/components/ui/nav-links";
import { Button } from "@/components/ui/button";
import FooterTwo from "@/components/ui/footer";
import Link from "next/link";
import { anton } from "@/components/ui/fonts";

import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";





export default async function HomePage() {


  return (
    <div className="text-center">
     
      
     <NavLink /> 

      
      <div className="flex items-center justify-center space-x-6">
        
        <div className="bg-yellow-500 border-red-900 mt-8 border-2 flex items-center justify-center space-x-2 rounded-bl-3xl rounded-tr-3xl shadow-xl shadow-red-900/40">
        
          <div className="rounded-full overflow-hidden w-52 h-52 mr-5 ml-5 mt-5 mb-5 bg-white shadow-xl shadow-yellow-600/65 outline-solid">
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
          <div><p className="text-xl">Junior Web Developer</p></div>
          </div>  
        
        </div>
        
      </div>

        
        <br/>
        
        <Link href="/contact/contact-me">
          <Button className={`${anton.className} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300* mt-6 mb-6 text-xl border-red-400 border-2 bg-yellow-500
           text-red-600 shadow-xl rounded hover:bg-gray-200`}>Contact me</Button>
           {/*transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300*/}
        </Link> 
        

        <div className="wrapper mt-5">
          <div className="item item1 font-bold flex items-center justify-center"><p className="pr-2">React</p><FaReact size={40} title="React" /></div>
          <div className="item item2 font-bold flex items-center justify-center"><p className="pr-2">Next.js</p><TbBrandNextjs size={40} title="Nextjs" /></div>  
          <div className="item item3 font-bold flex items-center justify-center"><p className="pr-2">TypeScript</p><SiTypescript size={35} title="typescript" /></div>
          <div className="item item4 font-bold flex items-center justify-center"><p className="pr-2">TailWind</p><SiTailwindcss size={35} title="Tailwind CSS" /></div>
          <div className="item item5 font-bold flex items-center justify-center"><p className="pr-2">Vercel</p><SiVercel size={35} title="Vercel" /></div>
          <div className="item item6 font-bold flex items-center justify-center"><p>This app was built with:</p></div>
        </div>

        <div className="flex justify-center"> 
          <div className="flex items-center justify-center rounded-full w-48 h-48 mr-5 ml-5 mb-5 bg-transparent outline-solid">
            <Image
            src="/arcreactor.png"
            layout="intrinsic"
            alt="arc reactor"
            width={150}
            height={300}
            className="fade-in-out"
            />
          </div>
        </div>
      

        <FooterTwo />    

            
    </div>
     
  );
}

