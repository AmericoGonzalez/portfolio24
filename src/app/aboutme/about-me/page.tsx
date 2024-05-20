import Image from "next/image";
import NavLink from "@/components/ui/nav-links";

import Footer from "@/components/ui/footer";


export default function AboutMePage() {
  

  return (
  <div className="text-center"> 

    <NavLink /> 

    <div className="flex">
      
      <div className="bg-gray-100 p-8 border-sky-200 border-2 ml-16 rounded-xl w-2/3">
        <h1 className="text-2xl">Beyond Work</h1>
        <br/>
        <p>I&rsquo;m a Chilean-Canadian fluent in both Spanish and English.</p>
        <p>My academic journey began with a Bachelor&rsquo;s degree in History and Geography, which also encompassed coursework 
          in economics, sociology,and education, providing me with a well-rounded foundation in the social sciences.</p>
        <p>My subsequent academic journey led me to Canada, where I pursued studies in business administration. Recently, 
          I&rsquo;ve embarked on web development studies, which I&rsquo;ve just completed.</p>
        <p>I have a keen interest in exploring diverse cultures through travel, although my opportunities for globe-trotting 
          have been somewhat limited thus far, with visits to only five countries.</p>
        <p>When it comes to leisure, I&rsquo;m drawn to sci-fi films, having even dabbled in creating videos and launching a YouTube channel. 
          I&rsquo;m passionate about culture, cutting-edge technology, and the visual arts in general.</p>
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