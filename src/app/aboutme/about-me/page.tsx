import Image from "next/image";
import Link from "next/link";
import mypic1 from "/public/mypic01.png";
import Footer from "@/components/ui/footer";


export default function AboutMePage() {
  

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

    <div className="flex">
      
      <div className="bg-gray-100 p-8 ml-16 rounded-xl w-2/3">
        <h1 className="font-bold">Beyond Work</h1>
        <br/>
        <p>Chilean Canadian I speak Spanish and English</p>
        <p>My first academic formation was in History and Geography and social science in general 
        with notions of economy sociology and education.</p>
        <p>My second academic formation was in business administration in Canada, then 
        I started my recently finished web development studies.</p>
        <p>I like to travel to experiment the different versions of Life of each culture,
        however I have not been able to travel much, I have visited only 5 countries so far.</p>
        <p>I like scifi films, I have made some videos and a youtube chanel in general I like
        culture, new technology, and visual arts.</p>
      </div>

      <div className="w-1/3 mr-16 ml-4">
        <Image
            src={mypic1}
            layout="responsive"
            alt="my picture 1"
            width={50}
            height={100}
            
          /> 
      </div>
      
    </div>
    <Footer /> 
  </div>
   
  );
}