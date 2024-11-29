import React from "react";
import heroImage from "../image/background.jpg";
import Button from "../component/Button";
import { products, rawMaterials } from "../data/data";
import Card from "../component/Card";
import chicken from "../image/chicken.png";
import industry from "../image/industry.png";
import { useNavigate } from "react-router-dom";
import ContactForm from "../component/ContactForm";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";


const Home = () => {
  const navigate = useNavigate();
   // Show only the first three products
   const limitedProducts = products.slice(0, 3);

  // Variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animates child elements sequentially
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div>
      <motion.div
        id="home"
        className="h-screen bg-cover bg-center relative flex items-center top-10"
        style={{ backgroundImage: `url(${heroImage})` }} // Set background image
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{
          duration: 100, // Adjust duration for smoother/slower movement
          repeat: Infinity, // Infinite loop
          ease: "linear", // Smooth linear animation
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Div */}
        <div className="z-10 text-white w-full lg:w-4/6 bg-gradient-to-r from-primary to-transparent h-full flex flex-col justify-center items-center lg:items-start px-4 sm:px-6 md:px-8 absolute left-0">
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="text-center lg:text-left w-full"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lg:w-[80%]">
              Your Trusted Partner in Animal Feed Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-lg py-6 lg:w-[50%]">
              Empowering farmers to achieve their goals while driving
              sustainable growth in agriculture.
            </p>
            <h4 className="text-md sm:text-lg md:text-xl font-bold mb-4 italic">
              Let's Grow Together
            </h4>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button text="Explore Products" to="/services" />
            <Button text="Contact Us" to="/contact" />
          </motion.div>
        </div>
      </motion.div>

      <div
        id="services"
        className="h-auto bg-white flex-col justify-center items-center px-6 md:px-16 lg:px-40"
      >
        {/* Products Section */}
        <div className="text-center mb-12 mt-20 pt-10">
          <h2 className="text-2xl font-bold text-black mb-4">
            What <span className="text-primary">We Sell</span>
          </h2>
          <h2 className="text-xl font-semibold text-black mb-4">
            Products
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="flex justify-center items-center"
          >
            <p className="text-gray-600 w-4/5">
              We provide high-quality products tailored to meet farmers' needs.
              From animal feed to other agricultural supplements, we ensure the
              best solutions for your farming enterprise.
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {limitedProducts.map((product, index) => (
          <motion.div key={index} variants={childVariants}>
            <Card image={product.image} title={product.title} />
          </motion.div>
        ))}
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mt-8"
        >
         <button
          onClick={() => navigate("/services")}
          className="border px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition hover:text-primary hover:border-solid hover:border-primary"
        >
          View More
        </button>
        </motion.div>

        {/* Raw Materials Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mt-16 mb-12"
        >
          <h2 className="text-xl font-semibold text-black mb-4">
            Raw Materials
          </h2>
          <p className="text-gray-600">
            We source and supply premium raw materials to support farmers and
            agricultural enterprises in achieving sustainable growth.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {rawMaterials.map((material, index) => (
            <motion.div key={index} variants={childVariants}>
              <Card image={material.image} title={material.title} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          variants={childVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="text-center my-8"
        >
          <button
          onClick={() => navigate("/services")}
          className="border px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary transition hover:text-primary hover:border-solid hover:border-primary"
        >
            View More
          </button>
        </motion.div>
      </div>
      <div
        id="about"
        className="h-auto bg-white flex justify-center items-center py-16 px-6 md:px-16 lg:px-40"
      >
        <div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              Transform Farming with Our Trusted <br />
              <span className="text-primary">Animal Feed Solutions</span>
            </h2>
          </motion.div>

          {/* Mission and Vision Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Mission and Vision Text */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold text-primary my-2">
                  Our Mission
                </h3>
                <p className="text-gray-600 lg:w-3/4">
                  <span className="font-bold italic text-green-700">
                    "Empowering Farmers, Growing Together"
                  </span>
                  <br />
                  To promote and provide strategic Agri-business products,
                  technical services on livestock farming (especially chickens,
                  pigs, and dairy cattle) best practices.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary my-2">
                  Our Vision
                </h3>
                <p className="text-gray-600 lg:w-3/4">
                  <span className="font-bold italic text-green-700 my-2">
                    "Leading the Future of Farming Enterprises"
                  </span>
                  <br />
                  To achieve a leading role in Animal Feed Distribution and raw
                  materials imports and provide outstanding professional
                  services to our esteemed clients.
                </p>
              </div>
            </motion.div>

            {/* Mission and Vision Image */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={chicken}
                alt="Mission"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between mt-16 gap-8">
            {/* Why Choose Us Image */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <img
                src={industry}
                alt="Why Choose Us"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            {/* Why Choose Us Text */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="w-full md:w-1/2 space-y-8"
            >
              <h3 className="text-lg font-bold text-primary mb-2">
                Why Choose Us
              </h3>
              <p className="text-gray-600">
                Kigali Animal Feed Ltd is managed by a highly competent team of
                people with enormous experience in the agriculture and poultry
                sector and pig sector. All our customers have access to our
                specialists who help in any way they can.
              </p>
              <ul className="list-none space-y-4">
                <li className="flex items-center gap-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    1
                  </span>
                  <p className="text-gray-600">Experienced Team</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    2
                  </span>
                  <p className="text-gray-600">Proven Track Record</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    3
                  </span>
                  <p className="text-gray-600">Nationwide Impact</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    4
                  </span>
                  <p className="text-gray-600">Customer-Centric Approach</p>
                </li>
                <li className="flex items-center gap-4">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    5
                  </span>
                  <p className="text-gray-600">
                    Dedication and Professionalism
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="h-auto bg-white flex justify-center items-center py-12"
      >
     <ContactForm />
      </div>

      <div></div>
    </div>
  );
};

export default Home;
