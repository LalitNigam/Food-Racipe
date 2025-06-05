

import { useContext, useEffect } from 'react'
import { racipecontext } from '../context/RacipeContext.jsx'
import RacipeCard from '../components/RacipeCard.jsx'
import { Link } from 'react-router-dom'

// Import motion from the motion package
import { animate, inView, scroll, stagger } from 'motion'
import { FaUtensils, FaHeart, FaUsers } from 'react-icons/fa'

const Home = () => {
  const { data } = useContext(racipecontext)
  
  // Get featured recipes (limit to 3)
  const featuredRecipes = data.slice(0, 3)

  useEffect(() => {
    // Hero section animations
    animate(
      '.hero-title',
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.8, easing: 'ease-out' }
    )

    animate(
      '.hero-subtitle',
      { opacity: [0, 1], y: [30, 0] },
      { duration: 0.8, delay: 0.2, easing: 'ease-out' }
    )

    animate(
      '.hero-cta',
      { opacity: [0, 1], scale: [0.9, 1] },
      { duration: 0.5, delay: 0.4, easing: 'ease-out' }
    )

    // Categories animation
    animate(
      '.category-card',
      { opacity: [0, 1], y: [20, 0] },
      { delay: stagger(0.1), duration: 0.5, easing: 'ease-out' }
    )

    // About section animations
    inView('.about-section', ({ target }) => {
      animate(
        target.querySelector('.about-title'),
        { opacity: [0, 1], y: [30, 0] },
        { duration: 0.6 }
      )
      
      animate(
        target.querySelector('.about-content'),
        { opacity: [0, 1], y: [20, 0] },
        { duration: 0.6, delay: 0.2 }
      )
      
      animate(
        target.querySelectorAll('.feature-item'),
        { opacity: [0, 1], x: [-20, 0] },
        { delay: stagger(0.1), duration: 0.5 }
      )
      
      return () => {}
    })

    // Scroll animations for featured recipes
    inView('.featured-title', ({ target }) => {
      animate(
        target,
        { opacity: [0, 1], x: [-20, 0] },
        { duration: 0.6 }
      )
      return () => {}
    })

    // Recipe cards scroll animation
    inView('.recipe-card-container', ({ target }) => {
      animate(
        target.querySelectorAll('.recipe-card'),
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.1), duration: 0.6 }
      )
      return () => {}
    })

    // Parallax effect on hero image
    scroll(
      ({ y }) => {
        document.querySelector('.hero-image')?.style.setProperty('transform', `translateY(${y * 0.2}px)`)
      }
    )
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black rounded-xl mb-10 h-[60vh] flex items-center">
        <div className="hero-image absolute inset-0 opacity-40 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop" 
            alt="Food background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-4">Discover <span className="text-orange-500">Delicious</span> Recipes</h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">Explore our collection of mouth-watering recipes from around the world.</p>
          <Link to="/recipes" className="hero-cta inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Explore Recipes
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular <span className="text-orange-500">Categories</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="category-card bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src="/image/fastfood.png" alt="Fast Food" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Fast Food</h3>
          </div>
          <div className="category-card bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src="/image/noodles.png" alt="Noodles" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Noodles</h3>
          </div>
          <div className="category-card bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src="/image/burgor.png" alt="Burgers" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Burgers</h3>
          </div>
          <div className="category-card bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src="/image/drink.png" alt="Drinks" className="w-16 h-16 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white">Drinks</h3>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section mb-16 bg-zinc-900 rounded-xl p-8 shadow-lg">
        <h2 className="about-title text-3xl font-bold mb-6 text-center">About <span className="text-orange-500">Our Kitchen</span></h2>
        <div className="about-content text-gray-300 text-lg mb-8 max-w-3xl mx-auto text-center">
          <p>Welcome to our culinary community where food enthusiasts gather to discover, share, and celebrate the art of cooking. Our mission is to provide a platform for everyone from beginners to expert chefs to explore delicious recipes from around the world.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="feature-item flex flex-col items-center bg-zinc-800 p-6 rounded-lg border-l-2 border-orange-500 hover:bg-zinc-700 transition-all duration-300">
            <FaUtensils className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Diverse Recipes</h3>
            <p className="text-gray-300 text-center">From traditional to modern cuisine, our collection spans various categories.</p>
          </div>
          
          <div className="feature-item flex flex-col items-center bg-zinc-800 p-6 rounded-lg border-l-2 border-orange-500 hover:bg-zinc-700 transition-all duration-300">
            <FaHeart className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Save Favorites</h3>
            <p className="text-gray-300 text-center">Build your personal cookbook with recipes you love and want to try.</p>
          </div>
          
          <div className="feature-item flex flex-col items-center bg-zinc-800 p-6 rounded-lg border-l-2 border-orange-500 hover:bg-zinc-700 transition-all duration-300">
            <FaUsers className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-white">Community Driven</h3>
            <p className="text-gray-300 text-center">Join our community of food lovers sharing culinary creations.</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/about" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300">
            Learn More About Us
          </Link>
        </div>
      </div>

      {/* Featured Recipes Section */}
      {featuredRecipes.length > 0 && (
        <div className="mb-10">
          <h2 className="featured-title text-3xl font-bold mb-8">Featured <span className="text-orange-500">Recipes</span></h2>
          <div className="recipe-card-container flex flex-wrap">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <RacipeCard recipe={recipe} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/recipes" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 border border-orange-500 hover:border-orange-600">
              View All Recipes
            </Link>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 rounded-xl p-10 text-center mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Create Your Own Recipe</h2>
        <p className="text-white text-xl mb-6">Share your culinary masterpieces with our community</p>
        <Link to="/create" className="inline-block bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
          Start Creating
        </Link>
      </div>
    </div>
  )
}

export default Home
