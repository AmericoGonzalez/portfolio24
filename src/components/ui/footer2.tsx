import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";



    const FooterTwo = () => {
        return (
          <footer className="relative bottom-0 left-0 w-full bg-yellow-500 bg-gradient-to-b from-yellow-500 to-black py-8 mt-6">
            
            <div className="flex justify-center space-x-4 p-3 mb-2">
              <p>This App uses:</p>
              <FaReact size={24} title="React" />
              <TbBrandNextjs size={24} title="Nextjs" />
              <SiTypescript size={23} />
              <SiTailwindcss size={24} title="Tailwind CSS" />
              
              <SiVercel size={24} title="Vercel" />
             
            </div>
          </footer>
        );
      };
      

export default FooterTwo;