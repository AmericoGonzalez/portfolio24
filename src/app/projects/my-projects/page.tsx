

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
      <CarouselContent className="w-120 h-160 flex justify-center items-center mt-6">
            

            

          <CarouselItem>
            {/*I need to keep this item empty to make work the carousel well*/}
          </CarouselItem>

          <CarouselItem>
            <div className="bg-yellow-500 p-6 rounded-xl m-8 sm:m-8 sm:p-6 sm:w-auto">
            
            <h1 className="text-2xl text-white sm:text-2xl">This app</h1>
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
            <div className="bg-yellow-500 p-6 rounded-xl m-8 sm:m-8 sm:p-6 sm:w-auto">
            
            <h1 className="text-2xl text-white sm:text-2xl">Dashboard of invoices</h1>
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
            className="object-contain w-auto h-full"
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


/*



import Image from "next/image";
import NavLink from "@/components/ui/nav-links";
import FooterTwo from "@/components/ui/footer";
import Link from "next/link";

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
     
      <div className="flex flex-col justify-center items-center sm:flex-row">
        <Carousel className="w-full sm:w-auto flex justify-center items-center">
          <CarouselContent className="w-full sm:w-120 h-160 flex flex-col justify-center items-center mt-6 space-y-4 sm:space-y-0">
            <CarouselItem>
              {/*I need to keep this item empty to make work the carousel well}
            </CarouselItem>

            <CarouselItem>
              <div className="bg-yellow-500 p-4 sm:p-6 rounded-xl m-4 sm:m-8 w-full sm:w-auto">
                <h1 className="text-xl sm:text-2xl text-white">This app</h1>
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
              <div className="bg-yellow-500 p-4 sm:p-6 rounded-xl m-4 sm:m-8 w-full sm:w-auto">
                <h1 className="text-xl sm:text-2xl text-white">Dashboard of invoices</h1>
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
                  className="object-contain w-full h-auto"
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

*/