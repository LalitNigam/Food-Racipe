import { nanoid } from 'nanoid'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { racipecontext } from '../context/RacipeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import * as motion from "motion/react-client"

const Create = () => {
  const navigate = useNavigate();

  const {data, setData} = useContext(racipecontext)

  const {register, handleSubmit, reset, formState: { errors }} = useForm()

  const SubmitHandler = (recipe) =>{
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Added Successfully")
    reset();
    navigate("/recipes");
  }


  // CHange image acording to image

  const [selectedCategory, setSelectedCategory] = useState("Appetizers");

  const imageMap = {
    Appetizers: "https://img.freepik.com/premium-photo/3d-mexican-food-cartoon-icon-illustration-3d-food-object-icon-concept-isolated-premium-design_1296140-329.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740",
    Mains: "https://img.freepik.com/premium-photo/3d-flat-icon-as-healthy-meal-junk-food-representing-healthy-eating-unhealthy-choices-with-am_980716-443511.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740",
    Drinks: "https://img.freepik.com/premium-photo/3d-icon-ice-coffee-cup-3d-illustration-3d-element-3d-rendering-graphic-elements-design_808921-625.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740",
    Vegan: "https://img.freepik.com/premium-photo/3d-icon-salad-simple-cute-clay-material-style-with-isometric-smooth-shiny_931778-5028.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740",
    FastFood: "https://img.freepik.com/free-photo/view-3d-burger-meal-with-french-fries_23-2150914719.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740",
    Traditional: "https://img.freepik.com/premium-vector/idly-with-sambhar-chutneys-served-banana-leaf_557796-32.jpg?ga=GA1.1.1888236512.1748245230&semt=ais_hybrid&w=740"
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };


  return (
    <div className='flex flex-row md:flex-col justify-center items-center md:py-0 py-15'>
      <div className='flex  md:w-[1000px] w-[370px] md:h-[620px]   md:overflow-hidden border-6 border-orange-500 rounded-4xl relative bg-orange-500'>
    <div className='md:w-[450px] w-[300px] h-[545px] px-7 py-7 absolute md:left-120 left-7 md:top-9 top-30 bg-gray-600 rounded-3xl border-b-3 border-l-2 border-orange-500 md:opacity-100 opacity-90'>
      <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className='block border-b border-orange-500 text-orange-500 rounded-3xl outline-none p-2 w-full text-center mb-2 bg-zinc-800'
        {...register("image")}
        type="url"
        placeholder='Image URL'
      />
      <input
        className='block border-b border-orange-500 text-orange-500 bg-zinc-800 rounded-3xl outline-none p-2 w-full text-center mb-2'
        {...register("title")}
        type="text"
        placeholder='Recipe Title'
      />
      <input
        className='block border-b border-orange-500 text-orange-500 bg-zinc-800 rounded-3xl outline-none p-2 w-full text-center mb-2'
        {...register("chef")}
        type="text"
        placeholder='Chef Name'
      />
      <textarea
        className='block border-b border-orange-500 text-orange-500 bg-zinc-800 rounded-3xl outline-none p-2 w-full text-center mb-2'
        {...register("description")}
        placeholder='Start From Here...'
      ></textarea>
      <textarea
        className='block border-b border-orange-500 text-orange-500 bg-zinc-800 rounded-3xl outline-none p-2 w-full text-center mb-2'
        {...register("ingredients")}
        placeholder='// Write Ingredients seperated by comma'
      ></textarea>
      <textarea
        className='block border-b border-orange-500 text-orange-500 bg-zinc-800 rounded-3xl outline-none p-2 w-full text-center mb-2'
        {...register("instructions")}
        placeholder='// Write Instructions seperated by comma'
      ></textarea>
      <select
        className='block border-b border-orange-500 text-orange-500  rounded-xl bg-zinc-800 outline-none p-2 w-full text-center mb-2'
        {...register("category")}
        placeholder='// Write Instructions seperated by comma'
        onChange={handleChange}
      >
        <option className='bg-orange-500 text-black font-bold' value="Appetizers">Appetizers</option>
        <option className='bg-orange-500 text-black font-bold' value="Mains">Mains</option>
        <option className='bg-orange-500 text-black font-bold' value="Drinks">Drinks</option>
        <option className='bg-orange-500 text-black font-bold' value="Vegan">Vegan</option>
        <option className='bg-orange-500 text-black font-bold' value="FastFood">Fast Food</option>
        <option className='bg-orange-500 text-black font-bold' value="Traditional">Traditional</option>
      </select>
      <button type='submit' className='block mt-5 bg-zinc-900 px-6 py-2 rounded-3xl w-full'>Save Racipe</button>
    </form>
    </div>
    <div className='w-[550px] rounded-4xl overflow-hidden'>
      {selectedCategory && (
        <img
          className='w-full h-full object-cover'
          src={imageMap[selectedCategory]}
          alt={selectedCategory}
        />
      )}
    </div>
    </div>
        <motion.img
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -8, 0],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
            }}
        className='md:w-[190px] w-[120px] absolute md:right-29 right-8 md:top-5 top-40 rotate-30 duration-500' src="/image/burgor.png" alt="" />
        <motion.img
            animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 4, 0],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
            }}
            className='md:w-[300px] w-[160px] absolute md:right-25 right-8 md:bottom-10 bottom-9 duration-500' src="/image/fastfood.png" alt="" />
        <motion.img
            animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 4, 0],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
            }}
          className='md:w-[200px] w-[110px] absolute md:left-25 left-6 rotate-350 md:bottom-10 bottom-24  duration-500' src="/image/drink.png" alt="" />
        <motion.img
            animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 8, 0],
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
            }}
          className='md:w-[230px] w-[140px] absolute md:left-35 left-5 md:top-14 top-13 rotate-340 duration-500' src="/image/noodles.png" alt="" />
    </div>
  )
}

export default Create
