

import Image from "next/image";
import NavLink from "@/components/ui/nav-links";
import FooterTwo from "@/components/ui/footer";
import Link from "next/link";
//import "@/components/ui/carousel.css";
import { FaGithub } from "react-icons/fa";



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function ProyectsPage() {
  return (
<div>
      <NavLink />
     
     <div className="flex justify-center items-center mt-3">

      <Carousel className="flex justify-center items-center">
      <CarouselContent className="flex justify-center items-center w-120 h-160">
            
      
            

          <CarouselItem>
            {/*I need to keep this item empty to make work the carousel well */}
          </CarouselItem>

          <CarouselItem>
          
          </CarouselItem>

          <CarouselItem>
            <div className="bg-yellow-500 p-6 rounded-xl m-4 sm:m-8 sm:p-6 sm:w-auto">
            
            <h1 className="text-xl text-white sm:text-xl">Dashboard of invoices</h1>
            
            <p>This is a simplified version of a financial dashboard that I made following the course
              Learn Next.js in the website of Next.js.
            </p>
            <p>You can add, edit, and delete invoices in an accompanying DB provided for Vercel.</p>
            <p>The dashboard will update automatically. You will notice simulated slow data 
              created to apply loading skeletons.</p>
            
              <Link href="https://portfolio-project-lemon-two.vercel.app/dashboard">
              <div className="text-blue-600 hover:text-blue-800">
                <p>Click here to see the app.</p>
              </div>
              </Link>
            <br />

            <Image
            src="/dash-pic.png"
            layout="responsive"
            alt="dashboard"
            width={50}
            height={100}
            className="object-contain w-auto h-full"
             />
              </div>
          </CarouselItem>
          
          <CarouselItem>
          <div className="bg-yellow-500 p-6 rounded-xl m-4 sm:m-8 sm:p-6 sm:w-auto">
            
            <h1 className="text-xl text-white sm:text-xl">BC PNP Calculator</h1>
            
            <p>This is a form that calculates the score that inmigrants can obtain to 
              apply for the BC Provincial Nominee Program.</p>
            
            <p>It was built with simple HTML CSS and Javascript</p>
            
              <Link href="https://bc-pnp-calculator.onrender.com">
              <div className="text-blue-600 hover:text-blue-800">
                <p>Click here to see the app.</p>
              </div>
              </Link>

              <br />

              <Image
              src="/pnpform.png"
              layout="responsive"
              alt="dashboard"
              width={30}
              height={70}
              className="object-contain w-auto h-full"
               />
              </div>

          </CarouselItem>

          <CarouselItem>
          <div className="bg-yellow-500 p-6 rounded-xl m-4 sm:m-8 sm:p-6 sm:w-auto">
            
            <h1 className="text-xl text-white sm:text-xl">This app</h1>
            
            <p>Styling inspired by the metallic superhero, this app was built with:</p>
            <br />
            <ul className="list-disc list-inside space-y-2">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Formspree</li>
                  <li>NextAuth.js</li>
                  <li>Shadcn</li>
                </ul>
            <br/>
            <p>Deployed on Vercel.</p>
              </div>
          </CarouselItem>
          
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
         </Carousel>
         </div>

          <div className="flex justify-center items-center"> 

            <div className="flex items-center justify-center space-x-2 bg-yellow-500 
            rounded-xl sm:m-8 sm:p-6 sm:w-auto">

              <p>More school projects: </p>
              
              <FaGithub size={25} title="React" />
              <p>AmericoGonzalez</p>
              
              </div>
          </div> 



      <FooterTwo />
</div>
  );
}


