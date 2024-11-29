import React from 'react'
import Logo from "../image/kigalianimalfeeds.png"
import AboutImage from "../image/about.png"

const About = () => {
  return (
    <div
        id="about"
        className="h-auto bg-white flex justify-center items-center py-16"
      >
     <div>
       {/* Title Section */}
       <div
  className="relative bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${AboutImage})` }}
>
  {/* Overlay for Opacity */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Content */}
  <div className="relative z-10 py-16 px-6 md:px-16 lg:px-40">
    <div className="mb-12 flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
      <img
        src={Logo}
        alt="Kigali Animal Feeds Logo"
        className="mx-auto mb-6 md:mb-0 md:mr-6 lg:mr-12 w-40"
      />
      <div className='text-center md:text-left flex flex-col items-center md:items-start'>
        <h1 className="text-xl font-bold text-white">
          Welcome to Kigali Animal Feeds
        </h1>
        <p className="text-white mt-4 max-w-3xl w-11/12 sm:w-full">
          Kigali Animal Feeds is one of the leading animal feed stores in
          Nyabugogo, the most convenient business site in Kigali. We are
          renowned for our unmatchable customer care, Affordable, high quality,
          and reliable Animal feeds for optimum Meat, Eggs, and Milk production
          yields.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-6 md:px-16 lg:px-40">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-green-600">Our Mission</h2>
          <p className="italic text-gray-800 mt-2">
            "Empowering Farmers, Growing Together"
          </p>
          <p className="text-gray-600 mt-4">
            To promote and provide Strategic Agri-business products, technical services, on livestock farming 
            (especially chickens, pigs, and dairy cattle) best practices.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-green-600">Our Vision</h2>
          <p className="italic text-gray-800 mt-2">
            "Leading the Future of Farming Enterprises"
          </p>
          <p className="text-gray-600 mt-4">
            To achieve a leading role in Animal Feed Distribution, and raw materials imports and indeed 
            provide outstanding professional services to our esteemed clients.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center px-6 md:px-16 lg:px-40">
        <div className="bg-[#0F67BA] bg-opacity-10 p-4 shadow-sm h-48">
          <h3 className="text-lg font-semibold text-gray-800">Experienced Team</h3>
          <p className="text-gray-600 mt-4">
            Kigali Animal Feed Ltd is managed by a highly competent team with extensive experience in the agriculture, poultry, and pig farming sectors.
          </p>
        </div>
        <div className="bg-[#13BDB4] bg-opacity-10 p-4 shadow-sm h-48">
          <h3 className="text-lg font-semibold text-gray-800">Proven Track Record</h3>
          <p className="text-gray-600 mt-4">
            With 12 years of dedicated service, we have built a reputation for hard work, excellent service delivery, and customer satisfaction.
          </p>
        </div>
        <div className="bg-[#4847FD] bg-opacity-10 p-4 shadow-sm h-48">
          <h3 className="text-lg font-semibold text-gray-800">Nationwide Impact</h3>
          <p className="text-gray-600 mt-4">
            Over the years, we have proudly served over 300,000 farmers, working diligently to understand and meet their needs.
          </p>
        </div>
        <div className="bg-[#4847FD] bg-opacity-10 p-4 shadow-sm h-48">
          <h3 className="text-lg font-semibold text-gray-800">Customer-Centric Approach</h3>
          <p className="text-gray-600 mt-4">
            Our mission is to make Kigali Animal Feeds a hub where livestock farmers can find everything they need.
          </p>
        </div>
        <div className="bg-[#0F67BA] bg-opacity-10 p-4 shadow-sm h-48">
          <h3 className="text-lg font-semibold text-gray-800">Dedication and Professionalism</h3>
          <p className="text-gray-600 mt-4">
            We bring diligence, professionalism, and unwavering dedication to every customer interaction.
          </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default About
