import { useContext } from "react"
import {racipecontext} from '../context/RacipeContext.jsx'
import  RacipeCard  from "../components/RacipeCard.jsx";

const Recipes = () => {

  const {data} = useContext(racipecontext)

  const renderrecipes = (data.map((recipe) => <RacipeCard key={recipe.id} recipe={recipe}/>))
  return (
    <div className="flex flex-wrap">
      {renderrecipes}
    </div>
  )
}

export default Recipes
