import { createContext, useState } from "react"

export const racipecontext = createContext(null);
const RacipeContext = (props) => {
    const [data, setData ]= useState([
      {
  "id": 1,
  "title": "Classic Margherita Pizza",
  "ingredients": [
    "Pizza dough",
    "Tomato sauce",
    "Fresh mozzarella cheese",
    "Fresh basil leaves",
    "Olive oil",
    "Salt and pepper to taste"
  ],
  "instructions": [
    "Preheat the oven to 475°F (245°C).",
    "Roll out the pizza dough and spread tomato sauce evenly.",
    "Top with slices of fresh mozzarella and fresh basil leaves.",
    "Drizzle with olive oil and season with salt and pepper.",
    "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
    "Slice and serve hot."
  ],
  "category": "Fast Food",
  "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
  "chef": "Chef Mario",
  "description": "A classic Italian pizza with a simple yet delicious combination of fresh ingredients."
}
    ]);
    console.log(data);
  return (
    <racipecontext.Provider value={{data, setData}}>
      {props.children}
    </racipecontext.Provider>
  )
}

export default RacipeContext
