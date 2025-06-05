import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from 'react-icons/fa6';

const RacipeCard = (props) => {
  const { title, image, chef, description, id } = props.recipe || {};
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('fav')) || [];
    setFavorites(storedFavorites);
    setIsFavorite(storedFavorites.some(fav => fav.id === id));
  }, [id]);

  // Handle adding to favorites
  const handleFavoriteToggle = (e) => {
    e.preventDefault(); // Prevent navigation to recipe details
    e.stopPropagation(); // Prevent event bubbling
    
    let updatedFavorites = [...favorites];
    
    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = updatedFavorites.filter(fav => fav.id !== id);
    } else {
      // Add to favorites
      updatedFavorites.push(props.recipe);
    }
    
    // Update state and localStorage
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
    localStorage.setItem('fav', JSON.stringify(updatedFavorites));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesUpdated'));
  };

  return (
    <div className="mr-3 mb-3 block w-full sm:w-[48%] md:w-[31%] lg:w-[23vw] rounded overflow-hidden group relative">
      <Link to={`/recipes/details/${id}`} className="block">
        <div className="max-w-full mx-auto p-2 sm:p-3 md:p-4 transform transition-all duration-300 group-hover:-translate-y-1">
          <div className="bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.35)] group-hover:shadow-[0_10px_20px_rgba(0,0,0,0.9)] transition-shadow duration-300">
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-3 sm:p-4 space-y-2 bg-orange-500 rounded-b-2xl relative">
              <h1 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-1">{title}</h1>
              <small className="block text-[15px] sm:text-[16px] text-blue-700 font-bold">{chef}</small>
              <p className="text-gray-900 line-clamp-2">
                {description ? description.slice(0, 100) : ""}...{" "}
                <span className="text-blue-600 font-bold inline-block">More</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Favorite button */}
      <button 
        onClick={handleFavoriteToggle}
        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-110"
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? (
          <FaHeart className="text-pink-600 text-xl" />
        ) : (
          <FaRegHeart className="text-pink-600 text-xl" />
        )}
      </button>
    </div>
  );
};

export default RacipeCard;
