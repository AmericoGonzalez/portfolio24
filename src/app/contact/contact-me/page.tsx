"use client";

import Link from "next/link";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";



export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyrolyr");
  if (state.succeeded) {
      return <div className="flex justify-center space-x-6 mb-16 mt-2 p-6 md:shadow-md">Thanks for Contacting me I will respond ASAP!
       <br/>
       <Link href="/">
          <Button className="border-green-400 border-2 bg-green-300 text-sky-600 shadow-xl rounded">HOME</Button>
        </Link>
      </div>;
    
     
  }


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
          <span className="text-xl cursor-pointer hover:text-sky-600 ">Projects</span>
        </Link>
        <Link href="/aboutme/about-me">
          <span className="text-xl cursor-pointer hover:text-sky-600">About</span>
        </Link>
      </div>

      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <form action="https://formspree.io/f/myyrolyr" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input
          id="email"
          type="email" 
          name="email"
          className="border border-black rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label className="block text-gray-700 font-semibold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          className="border border-black rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          ></textarea>

        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-black text-white rounded-lg px-6 py-3 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    <Footer /> 
  </div>

  );
}

