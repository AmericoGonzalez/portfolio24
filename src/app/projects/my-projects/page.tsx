

import Image from "next/image";
import NavLink from "@/components/ui/nav-links";
import FooterTwo from "@/components/ui/footer";
import Link from "next/link";
//import "@/components/ui/carousel.css";



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
     
     <div className="flex justify-center items-center">
      <Carousel className="flex justify-center items-center">
      <CarouselContent className="w-120 h-140 flex justify-center items-center mt-6">
            

            

          <CarouselItem>
            {/*I need to keep this item empty to make work the carousel well*/}
          </CarouselItem>

          <CarouselItem>
            <div className="bg-yellow-500 p-6 rounded-xl m-8">
            
            <h1 className="text-2xl text-white">This app</h1>
            <br />
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

          <CarouselItem>
            <div className="bg-yellow-500 p-6 rounded-xl m-8">
            
            <h1 className="text-2xl text-white">Dashboard of invoicessss</h1>
            <br />
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
            className="object-contain w-full h-full"
             />
              </div>
          </CarouselItem>

          

      

  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>



      <FooterTwo />
    </div>
  );
}




/*<div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 mb-16">
        
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 order-2 md:order-1">
          <div className="bg-yellow-500 p-6 rounded-xl">
            <h1 className="text-2xl text-white">Dashboard of invoices</h1>
            <br />
            <p>This is a simplified version of a financial dashboard from the course to learn Next.js.</p>
            <p>You can add, edit, and delete invoices in an accompanying DB provided for Vercel.</p>
            <p>The dashboard will update automatically. You will notice simulated slow data created to apply loading skeletons.</p>
            <br />
            <Link href="https://portfolio-project-lemon-two.vercel.app/dashboard">
              <div className="text-blue-600 hover:text-blue-800">
                <p>Click here to see the app.</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src="/dash-pic.png"
            layout="responsive"
            alt="my picture 1"
            width={50}
            height={100}
            className="rounded-xl"
          />
        </div>
      </div>*?*/