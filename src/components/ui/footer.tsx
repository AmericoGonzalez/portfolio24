
import { FaReact } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

import { SiVercel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";


    const Footer = () => {
        return (
          <footer className="fixed bottom-0 left-0 w-full bg-yellow-500 bg-gradient-to-b from-yellow-500 to-black py-4 mt-6">
            <div className="flex justify-center space-x-4 mb-2">
             <p>Made with:</p>
              <FaReact size={25} title="React" />
              <TbBrandNextjs size={25} title="Nextjs" />
              <SiTypescript size={25} />
              <SiTailwindcss size={25} title="Tailwind CSS" />
              
              <SiVercel size={25} title="Vercel" />

            
            </div>
          </footer>
        );
      };
      

export default Footer;