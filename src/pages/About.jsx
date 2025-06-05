import React from 'react'
import { motion } from 'framer-motion'
import { FaUtensils, FaHeart, FaUsers, FaHistory } from 'react-icons/fa'

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-zinc-900 text-white py-10 px-4 md:px-8"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-orange-500">About Our Recipe Collection</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">Discover the story behind our passion for delicious, homemade food and culinary excellence.</p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto bg-zinc-800 p-8 rounded-lg shadow-lg mb-16 border-l-4 border-orange-500"
      >
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Our Mission</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          We believe that cooking is an art that brings people together. Our mission is to provide a platform where food enthusiasts can discover, share, and save their favorite recipes from around the world. Whether you're a professional chef or a home cook, our collection offers something for everyone.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="mb-16">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-center text-orange-500"
        >
          What Makes Us Special
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-all duration-300"
          >
            <FaUtensils className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Diverse Recipes</h3>
            <p className="text-gray-300">From traditional dishes to modern cuisine, our collection spans various categories to satisfy all taste preferences.</p>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-all duration-300"
          >
            <FaHeart className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Favorites Collection</h3>
            <p className="text-gray-300">Save your favorite recipes for quick access and build your personal cookbook with dishes you love.</p>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-all duration-300"
          >
            <FaUsers className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-gray-300">Join a community of food lovers who share their culinary creations and cooking tips.</p>
          </motion.div>
          
          {/* Feature 4 */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-all duration-300"
          >
            <FaHistory className="text-5xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Culinary Heritage</h3>
            <p className="text-gray-300">Explore recipes that celebrate cultural traditions and preserve culinary heritage for future generations.</p>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">Our Team</h2>
        <div className="bg-zinc-800 p-8 rounded-lg shadow-lg">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Our team consists of passionate food enthusiasts, professional chefs, and tech experts who work together to create the best recipe sharing platform. We're dedicated to continuously improving your experience and expanding our collection of delicious recipes.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            We welcome feedback and suggestions from our community as we strive to make this the ultimate destination for food lovers everywhere.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-4 text-orange-500">Join Our Culinary Journey</h2>
        <p className="text-xl text-gray-300 mb-8">Start exploring our recipes today and become part of our growing community of food enthusiasts.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-orange-600 transition-colors duration-300"
          onClick={() => window.location.href = '/recipes'}
        >
          Explore Recipes
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default About
