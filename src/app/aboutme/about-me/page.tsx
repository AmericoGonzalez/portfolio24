import Image from "next/image";
import NavLink from "@/components/ui/nav-links";

import Footer from "@/components/ui/footer";


export default function AboutMePage() {
  

  return (
  <div className="text-center"> 

    <NavLink /> 

    <div className="flex">
      
      <div className="bg-gray-100 p-8 border-sky-200 border-2 ml-16 rounded-xl w-2/3">
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

      <div className="w-1/3 mr-16 ml-4 shadow-xl">
        <Image
            src="/mypic01.png"
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