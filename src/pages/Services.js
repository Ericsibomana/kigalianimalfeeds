import React from 'react'
import Card from "../component/Card";
import { products, rawMaterials } from "../data/data";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Services = () => {
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
            <div
        id="services"
        className="h-auto bg-white flex-col justify-center items-center px-6 md:px-16 lg:px-40 my-8"
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
          {products.map((product, index) => (
          <motion.div key={index} variants={childVariants}>
            <Card image={product.image} title={product.title} />
          </motion.div>
        ))}
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
</div>
  )
}

export default Services
