
import FooterTwo from "@/components/ui/footer2";
import NavLink from "@/components/ui/nav-links";
import { anton } from "@/components/ui/fonts";




export default function ResumePage() {
  return (

    <div> 
        <NavLink /> 
      
      <div className="mx-10 mb-10 bg-gray-100 p-8 rounded-xl border-sky-200 border-2">
        <div className="flex items-stretch justify-center space-x-72">
          <div>
            <h1 className="text-lg pr-10 mt-1 text-decoration: underline">Summary of Resume</h1>
            </div>
            

              <a href="https://portfolio24-taupe.vercel.app/Resume.pdf" download className={`${anton.className} cursor-pointer block rounded-xl p-3 pr-6 bg-yellow-500 text-red-600 hover:text-sky-600 border-0`}>
          <span className="ml-4">Download Full Resume</span>
        </a>
       
  


        </div>


        <br/>
        <h1 className="text-xl">Americo Gonzalez</h1>
        <h2>developer.agonzalez@gmail.com | 236 882 5632</h2>
        <br/>
  
        <h2 className="text-lg">Highlights</h2>
        <br/>

        <div className="flex">
          <div className="w-1/2">
            <h3 className="text-lg">Technical Skills</h3>
            <p>SQL, Business Analysis and System design, Microsoft Visio, HTML, CSS,
              Tailwind.css, JavaScript, React, Next.js, Node.js, GitHub, and Figma.
            </p>
          </div>
            
          <div className="w-1/2 ml-2">
            <h3 className="text-lg">Soft Skills</h3>
            <p>Teamwork, problem solving, adaptability, time management, creativity</p>
          </div>
        </div>

        <br/>

        <h2 className="text-lg">Work Experience</h2>
        <br/>
        <ul>
          <li>
            <h3 className="text-lg">Driver Licensing Support Assistant</h3>
            <p>ICBC. 2019- Present</p> 
          </li>
          <li>
            <h3 className="text-lg">Cashier</h3>
            <p>London Drugs. 2018-2019</p> 
          </li>
          <li>
            <h3 className="text-lg">Translator (Spanish-English)</h3>
            <p>Edutecno. 2017</p> 
          </li>
          <li>
            <h3 className="text-lg">Teacher of English</h3>
            <p>Tronwell and Manpower. 2013-2017</p> 
          </li>
          <li>
            <h3 className="text-lg">Teacher&apos;s Coordinator</h3>
            <p>Alain High School 2009-2012</p> 
          </li>
        </ul> 

        <br/>

        <h2 className="text-lg">Education</h2>
        <br/>
        <ul>
          <li>
            <h3 className="text-lg">British Columbia Institute of Technology</h3>
            <p>Web Development Certificate</p> 
          </li>
          <li>
            <h3 className="text-lg">University of Victoria</h3>
            <p>Business Administration Diploma</p> 
          </li>
          <li>
            <h3 className="text-lg">UMCE</h3>
            <p>History and Geography Bachelor Degree</p> 
          </li>
        </ul> 
      </div>  

      <FooterTwo />
    </div>
  );
}
