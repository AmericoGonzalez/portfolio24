import Link from "next/link";
import Footer from "@/components/ui/footer";



export default function ProyectsPage() {

  

  return (
    <div> 
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

      <h3>These are my Projects</h3>
      <Footer /> 
   </div>
   
  );
}