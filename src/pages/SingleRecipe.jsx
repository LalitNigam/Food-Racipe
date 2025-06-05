import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { racipecontext } from '../context/RacipeContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaRegHeart, FaHeart  } from "react-icons/fa6";

const SingleRecipe = () => {
    const {data, setData} = useContext(racipecontext)
    const navigate = useNavigate();
    const params = useParams();
    const recipe = data.find((recipe) => params.id == recipe.id);


  const {register, handleSubmit} = useForm({defaultValues: {
    title: recipe?.title,
    image: recipe?.image,
    chef: recipe?.chef,
    description: recipe?.description,
    category: recipe?.category,
    ingredients: recipe?.ingredients,
    instructions: recipe?.instructions
  }})

  const UpdateHandler = (recipe) =>{
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = {...copydata[index], ...recipe};
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Updated Successfully");
  }

    const DeleteHandler = () => {
        const filterdata = data.filter(r => r.id !== params.id);
        setData(filterdata);
        localStorage.setItem("recipes", JSON.stringify(filterdata));
        toast.error("Deleted Successfully");
        navigate("/recipes");
    };

    useEffect(() => {
        console.log('SingleRecipe.jsx mounted');
        return () => {
          console.log('SingleRecipe.jsx unmounted');
        }
      },[]);

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav"))|| []
  );

  const FavHandler = () => {
    let copyfav = [...favroite];
    copyfav.push(recipe);
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesUpdated'));
  }
  
  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('favoritesUpdated'));
  }

  return recipe ? (
  <div className='flex md:flex-row flex-col bg-zinc-900 rounded-2xl md:py-9 md:pl-9 md:gap-0 gap-4'>
    <div className='relative md:w-1/2 w-full p-5 bg-gray-900 border-2 rounded-2xl'>
        {favroite.find((f) => f.id == recipe?.id) ?
        <FaHeart
        onClick={UnFavHandler}
        className='absolute text-pink-600 text-4xl md:right-10 right-3 md:top-10 top-14 p-2 rounded-full bg-gray-200'/> :
        <FaRegHeart
        onClick={FavHandler}
        className='absolute text-pink-600 text-4xl md:right-10 right-3 md:top-10 top-14 p-2 rounded-full bg-gray-200'/>}
        <h1 className='md:text-6xl text-3xl font-bold mb-2 mt-10 md:mr-0 mr-10'>{recipe.title}</h1>
        <div className='flex gap-5 items-center'>
          <img className='w-[20vh]' src={recipe.image} alt="" />
          <h1 className='font-bold text-orange-500 text-4xl'>{recipe.chef}</h1>
        </div>
        <p className='text-xl text-gray-200'>{recipe.description}</p>
    </div>
    <div className='md:w-1/2 w-full p-2 flex justify-center'>
        <form className='md:w-4/6' onSubmit={handleSubmit(UpdateHandler)}>
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
      >
        <option className='bg-orange-500 text-black font-bold' value="Appetizers">Appetizers</option>
        <option className='bg-orange-500 text-black font-bold' value="Mains">Mains</option>
        <option className='bg-orange-500 text-black font-bold' value="Drinks">Drinks</option>
        <option className='bg-orange-500 text-black font-bold' value="Vegan">Vegan</option>
        <option className='bg-orange-500 text-black font-bold' value="FastFood">Fast Food</option>
        <option className='bg-orange-500 text-black font-bold' value="Traditional">Traditional</option>
      </select>
      <div className='flex flex-row gap-2'>
        <button type='submit' className='block mt-5 bg-blue-900 px-6 py-2 rounded-3xl w-full'>
        Update Racipe
      </button>
      <button type='button' onClick={DeleteHandler} className='block mt-5 bg-red-700 px-6 py-2 rounded-3xl w-full'>
        Delete Racipe
      </button>
      </div>
    </form>
    </div>
  </div>
  ): "Loading...";
  }

export default SingleRecipe
