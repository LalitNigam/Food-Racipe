import { useContext } from "react"
import {racipecontext} from '../context/RacipeContext.jsx'
import  RacipeCard  from "../components/RacipeCard.jsx";

const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderrecipes = (favroite.map((recipe) => <RacipeCard key={recipe.id} recipe={recipe}/>))
  return (
    <div className="flex flex-wrap">
      {favroite.length > 0 ? renderrecipes : "No favorite recipes found."}
    </div>
  )
}

export default Fav
