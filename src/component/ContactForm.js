import React from 'react'
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className="bg-secondary grid grid-cols-1 lg:grid-cols-2 w-[90%] rounded-lg">
  {/* Left Side - Contact Form */}
  <div className="w-full p-8 flex flex-col justify-center">
    <h2 className="text-4xl font-bold text-green-600">Get in <span className="text-black">Touch</span></h2>
    <p className="text-gray-600 mt-4">
      Please fill out the form below, and we’ll get back to you as soon as possible.
    </p>
    <form className="mt-6 space-y-4">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
        <input
          type="text"
          id="phone"
          placeholder="Enter your phone number"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        />
      </div>
      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea
          id="message"
          rows="4"
          placeholder="Enter your message"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
      >
        SEND
      </button>
    </form>
    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4 text-gray-800">
  {/* Phone Info */}
  <div className="flex items-center space-x-3">
    <FaPhoneAlt className="text-green-600" size={20} />
    <div className="flex lg:flex-col justify-center items-center lg:items-start gap-2">
      <span className="block text-sm font-medium text-gray-600">Phone</span>
      <span className="text-sm font-semibold text-green-600">+250 784 442 356</span>
    </div>
  </div>
  {/* Email Info */}
  <div className="flex items-center space-x-3">
    <FaEnvelope className="text-green-600" size={20} />
    <div className="flex lg:flex-col justify-center items-center lg:items-start gap-2">
      <span className="block text-sm font-medium text-gray-600">Email</span>
      <span className="text-sm font-semibold text-green-600">
        kigalianimalfeedltd@gmail.com
      </span>
    </div>
  </div>
</div>
  </div>

  {/* Right Side - Map Section */}
  <div className="w-full h-full bg-primary p-4 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none">
    <div className="w-full h-full rounded-lg overflow-hidden">
    <iframe
  title="Kigali Nyabugogo Map"
  src="https://www.google.com/maps?q=-1.937722,30.05075&z=15&output=embed"
  width="100%"
  height="100%"
  allowFullScreen=""
  loading="lazy"
  className="rounded-lg"
/>
    </div>
  </div>
</div>
    </div>
  )
}

export default ContactForm
