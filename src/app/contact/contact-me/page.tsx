/*"use client";


import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from "@/components/ui/footer";

import Image from "next/image";

import NavLink from "@/components/ui/nav-links";


export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyrolyr");
  if (state.succeeded) {
      return  (
      
    <div>
      <NavLink />

      <div className="flex justify-center items-center mt-8">
        
        <div className="ml-16 mr-4">
        <Image
            src="/ironman.png"
            layout="responsive"
            alt="my picture 1"
            width={50}
            height={100}
            className="rounded-xl"
            /> 
        </div>

        <br/>
        <div className='bg-yellow-500 text-white text-xl p-6 rounded-xl'>
        <p>Thank you!</p>
        <p>I&rsquo;ll get back to you ASAP.</p>
        </div>
      </div>
      
      <Footer />  
    
    </div>
    
  )
  }


  return (
<div>
      <NavLink /> 

      <div className="max-w-md mx-auto p-6 bg-yellow-500 border-sky-200 border-2 rounded-xl shadow-md mt-10">
      <form action="https://formspree.io/f/myyrolyr" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
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
        <label className="block text-gray-700 mb-2">Message</label>
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
*/


"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import NavLink from "@/components/ui/nav-links";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("myyrolyr");
  
  if (state.succeeded) {
    return (
      <div>
        <NavLink />

       

        <div className="flex flex-col justify-center items-center mt-8 space-x-4 md:space-y-0">
         
               
         
          <div className="w-60 h-auto m-6 md:w-auto">
            <Image
              src="/ironman.png"
              layout="responsive"
              alt="Iron Man"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>

          <div className="bg-yellow-500 text-white text-xl p-8 rounded-xl w-60 h-auto m-6">
            <p>Thank you!</p>
            <p>I&rsquo;ll get back to you ASAP.</p>
          </div>  
          
          
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavLink />

      <div className="max-w-md mx-auto p-6 bg-yellow-500 border-sky-200 border-2 rounded-xl shadow-md mt-10">
        <form
          action="https://formspree.io/f/myyrolyr"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="border border-black rounded-lg px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
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
