import { useContext, useEffect, useState } from 'react'
import { racipecontext } from '../context/RacipeContext.jsx'
import RacipeCard from '../components/RacipeCard.jsx'
import { Link } from 'react-router-dom'
import { animate, stagger } from 'motion'
import { FaHeartBroken } from 'react-icons/fa'

const Fav = () => {
  const [favorites, setFavorites] = useState([])
  
  // Load favorites from localStorage and set up event listener
  useEffect(() => {
    // Initial load of favorites
    loadFavorites()
    
    // Set up storage event listener to detect changes from other components
    window.addEventListener('storage', handleStorageChange)
    
    // Custom event listener for favorite changes within the same window
    window.addEventListener('favoritesUpdated', loadFavorites)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('favoritesUpdated', loadFavorites)
    }
  }, [])
  
  // Handle storage changes (from other tabs/windows)
  const handleStorageChange = (e) => {
    if (e.key === 'fav') {
      loadFavorites()
    }
  }
  
  // Load favorites from localStorage
  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('fav')) || []
    setFavorites(storedFavorites)
    
    // Apply animations after a short delay to ensure DOM is updated
    setTimeout(() => {
      if (storedFavorites.length > 0) {
        animate(
          '.fav-title',
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.6, easing: 'ease-out' }
        )
        
        animate(
          '.fav-card',
          { opacity: [0, 1], scale: [0.9, 1] },
          { delay: stagger(0.1), duration: 0.5, easing: 'ease-out' }
        )
      } else {
        // Animate empty state
        animate(
          '.empty-state',
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.8, easing: 'ease-out' }
        )
      }
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="fav-title text-3xl font-bold mb-8 text-center">
        <span className="text-orange-500">Favorite</span> Recipes
      </h1>
      
      {favorites.length > 0 ? (
        <div className="flex flex-wrap">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="fav-card">
              <RacipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state flex flex-col items-center justify-center py-16 text-center">
          <FaHeartBroken className="text-orange-500 text-6xl mb-6" />
          <h2 className="text-2xl font-bold mb-4">No favorite recipes yet</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-md">
            Explore our recipes and click the heart icon to add them to your favorites
          </p>
          <Link 
            to="/recipes" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Explore Recipes
          </Link>
        </div>
      )}
    </div>
  )
}

export default Fav
