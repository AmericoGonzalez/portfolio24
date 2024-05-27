

import FooterTwo from "@/components/ui/footer2";
import NavLink from "@/components/ui/nav-links";
import { anton } from "@/components/ui/fonts";

export default function ResumePage() {
  return (
    <div>
      <NavLink />
      
      <div className="ml-12 mr-12 mb-10 mt-8 bg-yellow-500 p-6 md:p-8 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
          <h1 className="text-lg md:text-xl font-semibold underline">Summary of Resume</h1>
          
          <a href="https://portfolio24-taupe.vercel.app/Resume.pdf" download className={`${anton.className} cursor-pointer block rounded-xl p-3 bg-red-600 text-yellow-500 hover:text-white`}>
            <span>Download Full Resume</span>
          </a>
        </div>

        <br />
        <h1 className="text-lg md:text-xl font-bold text-white">Americo Gonzalez</h1>
        <h2 className="font-semibold text-white">developer.agonzalez@gmail.com | 236 882 5632</h2>
        <br />
        <br />
  
        <h2 className="text-lg font-semibold">Highlights</h2>
        <br />

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 border-red-600 border-2 p-2 m-2">
            <h3 className="text-lg italic">Technical Skills</h3>
            <p>SQL, Business Analysis and System design, Microsoft Visio, HTML, CSS,
              Tailwind.css, JavaScript, React, Next.js, Node.js, GitHub, and Figma.
            </p>
          </div>
            
          <div className="md:w-1/2 md:ml-2 border-red-600 border-2 p-2 m-2">
            <h3 className="text-lg italic">Soft Skills</h3>
            <p>Teamwork, problem solving, adaptability, time management, creativity.</p>
          </div>
        </div>

        <br />

        <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 border-red-600 border-2 p-2 m-2">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        <br />
        <ul>
          <li>
            <h3 className="text-lg">Driver Licensing Support Assistant</h3>
            <p>ICBC. 2019- Present</p> 
            <br />
          </li>
          <li>
            <h3 className="text-lg">Cashier</h3>
            <p>London Drugs. 2018-2019</p> 
            <br />
          </li>
          <li>
            <h3 className="text-lg">Translator (Spanish-English)</h3>
            <p>Edutecno. 2017</p> 
            <br />
          </li>
          <li>
            <h3 className="text-lg">Teacher of English</h3>
            <p>Tronwell and Manpower. 2013-2017</p>
            <br /> 
          </li>
          <li>
            <h3 className="text-lg">Teacher&apos;s Coordinator</h3>
            <p>Alain High School 2009-2012</p> 
          </li>
        </ul> 
        </div>
        <br />
        
        <div className="md:w-1/2 border-red-600 border-2 p-2 m-2">
        <h2 className="text-lg font-semibold">Education</h2>
        <br />
        <ul>
          <li>
            <h3 className="text-lg">British Columbia Institute of Technology</h3>
            <p>Web Development Certificate</p> 
            <br />
          </li>
          <li>
            <h3 className="text-lg">University of Victoria</h3>
            <p>Business Administration Diploma</p> 
            <br />
          </li>
          <li>
            <h3 className="text-lg">UMCE</h3>
            <p>History and Geography Bachelor Degree</p> 
            <br />
        </li>
        </ul> 
        </div>
        </div>



      </div>  

      <FooterTwo />
    </div>
  );
}
