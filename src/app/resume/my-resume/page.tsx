import Link from "next/link";
import FooterTwo from "@/components/ui/footer2";




export default function ResumePage() {
  return (

  

    <div> 
      <div className="flex justify-center space-x-6 mb-6 mt-2 p-6 md:shadow-md">
        
        <Link href="/">
          <span className="text-xl cursor-pointer">Home</span>
        </Link>
        
        <Link href="/resume/my-resume">
          <span className="text-xl cursor-pointer">Resume</span>
        </Link>
        <Link href="/projects/my-projects">
          <span className="text-xl cursor-pointer">Projects</span>
        </Link>
        <Link href="/aboutme/about-me">
          <span className="text-xl cursor-pointer">About</span>
        </Link>
      </div>
      
      <div className="mx-10 mb-10 bg-gray-100 p-8 rounded-xl">
        <div className="flex items-stretch justify-center space-x-72">
          <div>
            <h1 className="font-bold pr-10 mt-1 text-decoration: underline">Summary of Resume</h1>
            </div>
            

              <a href="https://portfolio24-taupe.vercel.app/Resume.pdf" download className="cursor-pointer block rounded p-3 pr-6 bg-blue-200 border-0">
          <span className="ml-4">Download Full Resume</span>
        </a>
       
  


        </div>


        <br/>
        <h1 className="font-bold">Americo Gonzalez</h1>
        <h2>developer.agonzalez@gmail.com | 236 882 5632</h2>
        <br/>
  
        <h2 className="font-bold">Highlights</h2>
        <br/>

        <div className="flex">
          <div className="w-1/2">
            <h3 className="font-bold">Technical Skills</h3>
            <p>SQL, Business Analysis and System design, Microsoft Visio, HTML, CSS,
              Tailwind.css, JavaScript, React, Next.js, Node.js, GitHub, and Figma.
            </p>
          </div>
        
          <div className="w-1/2">
            <h3 className="font-bold">Soft Skills</h3>
            <p>Teamwork, problem solving, adaptability, time management, creativity</p>
          </div>
        </div>

        <br/>

        <h2 className="font-bold">Work Experience</h2>
        <br/>
        <ul>
          <li>
            <h3 className="font-bold">Driver Licensing Support Assistant</h3>
            <p>ICBC. 2019- Present</p> 
          </li>
          <li>
            <h3 className="font-bold">Cashier</h3>
            <p>London Drugs. 2018-2019</p> 
          </li>
          <li>
            <h3 className="font-bold">Translator (Spanish-English)</h3>
            <p>Edutecno. 2017</p> 
          </li>
          <li>
            <h3 className="font-bold">Teacher of English</h3>
            <p>Tronwell and Manpower. 2013-2017</p> 
          </li>
          <li>
            <h3 className="font-bold">Teacher&apos;s Coordinator</h3>
            <p>Alain High School 2009-2012</p> 
          </li>
        </ul> 

        <br/>

        <h2 className="font-bold">Education</h2>
        <br/>
        <ul>
          <li>
            <h3 className="font-bold">British Columbia Institute of Technology</h3>
            <p>Web Development Certificate</p> 
          </li>
          <li>
            <h3 className="font-bold">University of Victoria</h3>
            <p>Business Administration Diploma</p> 
          </li>
          <li>
            <h3 className="font-bold">UMCE</h3>
            <p>History and Geography Bachelor Degree</p> 
          </li>
        </ul> 
      </div>  

      <FooterTwo />
    </div>
  );
}
