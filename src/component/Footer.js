import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 px-4 md:px-6 lg:px-10">
      <div className="container mx-auto flex flex-wrap justify-between space-y-12 md:space-y-0">
        {/* Section 1: Company Info */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold w-2/3">KIGALI ANIMAL FEEDS LTD</h3>
          <p className="mt-4 text-sm w-2/3">
            Transform Farming with Our Trusted Animal Feed Solutions
          </p>
        </div>

        {/* Section 2: Navigation */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: Contact Us */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-xl" />
              <span>kigalianimalfeedltd@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-xl" />
              <span>Rwanda, Kigali, Nyabugogo</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-xl" />
              <span>+250 784 442 356</span>
            </li>
          </ul>
        </div>

        {/* Section 4: Learn More */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold">Learn More</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">General Info</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Private Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Section 5: Social */}
        <div className="w-full md:w-1/5">
          <h3 className="text-lg font-bold">Social</h3>
          <div className="flex space-x-4 mt-4">
            {/* Facebook */}
            <a
              href="#"
              className="w-6 h-6 bg-white flex items-center justify-center rounded-md hover:bg-gray-200"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-primary text-sm" />
            </a>
            {/* Twitter */}
            <a
              href="#"
              className="w-6 h-6 bg-white flex items-center justify-center rounded-md hover:bg-gray-200"
              aria-label="Twitter"
            >
              <FaTwitter className="text-primary text-sm" />
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-6 h-6 bg-white flex items-center justify-center rounded-md hover:bg-gray-200"
              aria-label="YouTube"
            >
              <FaYoutube className="text-primary text-sm" />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-6 h-6 bg-white flex items-center justify-center rounded-md hover:bg-gray-200"
              aria-label="Instagram"
            >
              <FaInstagram className="text-primary text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
