import React from 'react'
import ContactImage from "../image/contactImage.png"
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from '../component/ContactForm';

const Contact = () => {
  return (
    <div
    id="contact"
    className="h-auto bg-white flex justify-center items-center py-16 mt-8"
  >
 <div>
   {/* Title Section */}
   <div
className="relative bg-cover bg-center text-white w-full"
style={{ backgroundImage: `url(${ContactImage})` }}
>
{/* Overlay for Opacity */}
<div className="absolute inset-0 bg-black bg-opacity-40"></div>

{/* Content */}
<div className="relative z-10 py-16 px-6 md:px-16 lg:px-40">
<div className="mb-12 flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
 
  <div className='text-center md:text-right flex flex-col items-center md:items-end'>
    <h1 className="text-4xl font-bold text-white">
     Contact Us
    </h1>
  </div>
</div>
</div>
</div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 px-6 md:px-16 lg:px-40 items-center">
            <div className="flex justify-center font-bold items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <span>kigalianimalfeedltd@gmail.com</span>
            </div>
            <div className="flex justify-center items-center font-bold space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>Rwanda, Kigali, Nyabugogo</span>
            </div>
            <div className="flex justify-center items-center font-bold space-x-2">
              <FaPhoneAlt className="text-xl" />
              <span>+250 784 442 356</span>
            </div>
  </div>

  {/* Contact form */}
  <ContactForm />
 </div>
</div>
  )
}

export default Contact
