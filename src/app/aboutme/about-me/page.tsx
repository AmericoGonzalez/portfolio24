


import Image from "next/image";
import NavLink from "@/components/ui/nav-links";
import FooterTwo from "@/components/ui/footer";

export default function AboutMePage() {
  return (
    <div className="text-center mb-6">
      <NavLink />
      <div className="flex flex-col md:flex-row items-center md:items-start p-4 mb-4 md:p-8">
        <div className="w-full md:w-1/3 mb-4 md:mb-0 md:ml-16 md:mr-4 order-2 md:order-1">
          <Image
            src="/mypic01.png"
            layout="responsive"
            alt="my picture 1"
            width={50}
            height={100}
            className="rounded-xl"
          />
        </div>
        <div className="bg-yellow-500 p-6 rounded-xl w-full md:w-2/3 order-1 md:order-2 md:mr-16 mb-4">
          <h1 className="text-2xl text-white">Beyond Work</h1>
          <br />
          <p>My name is Americo Gonzalez, a web developer with a passion for creating visually appealing, user-friendly, and responsive apps.</p>
          <p>I&rsquo;m a Chilean-Canadian fluent in both Spanish and English.</p>
          <p>My academic journey began with a Bachelor&rsquo;s degree in History and Geography, which also encompassed coursework in economics, sociology, and education, providing me with a well-rounded foundation in the social sciences.</p>
          <p>My subsequent academic journey led me to Canada, where I pursued studies in business administration. Recently, I&rsquo;ve embarked on web development studies, which I&rsquo;ve just completed.</p>
          <p>I have a keen interest in exploring diverse cultures through travel, although my opportunities for globe-trotting have been somewhat limited thus far, with visits to only five countries.</p>
          <p>When it comes to leisure, I&rsquo;m drawn to sci-fi films, classic rock-pop music, and video editing. I&rsquo;m passionate about culture, cutting-edge technology, and the visual arts in general.</p>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
}
