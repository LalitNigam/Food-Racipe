import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { LuSquareMenu } from "react-icons/lu";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="relative md:px-6 md:py-4 p-1">
      <div className="hidden md:flex justify-center gap-x-20 text-lg font-medium">
        <NavLink className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition" : "text-white hover:text-orange-500 transition"} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition" : "text-white hover:text-orange-500 transition"} to="/recipes">Recipes</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition" : "text-white hover:text-orange-500 transition"} to="/about">About</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition" : "text-white hover:text-orange-500 transition"} to="/create">Create Recipes</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500 pb-1 transition" : "text-white hover:text-orange-500 transition"} to="/fav">Favroite</NavLink>
      </div>
      <div className="flex justify-between md:hidden">
        <div>
        </div>
        <button onClick={toggleMenu} className="text-orange-500 focus:outline-none">
          {isOpen ? <IoMdCloseCircle className="text-4xl" /> : <LuSquareMenu className="text-4xl" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg rounded-lg px-6 py-4 absolute right-4 top-16 w-48 z-50 space-y-3">
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-orange-500 font-semibold p-2 border-1 border-orange-500 rounded-xl bg-amber-100 text-center" : "text-gray-700 hover:bg-orange-200 p-2 rounded-xl text-center"} to="/">Home</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-orange-500 font-semibold p-2 border-1 border-orange-500 rounded-xl bg-amber-100 text-center" : "text-gray-700 hover:bg-orange-200 p-2 rounded-xl text-center"} to="/recipes">Recipes</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-orange-500 font-semibold p-2 border-1 border-orange-500 rounded-xl bg-amber-100 text-center" : "text-gray-700 hover:bg-orange-200 p-2 rounded-xl text-center"} to="/about">About</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-orange-500 font-semibold p-2 border-1 border-orange-500 rounded-xl bg-amber-100 text-center" : "text-gray-700 hover:bg-orange-200 p-2 rounded-xl text-center"} to="/create">Create Recipes</NavLink>
          <NavLink onClick={toggleMenu} className={({ isActive }) => isActive ? "text-orange-500 font-semibold p-2 border-1 border-orange-500 rounded-xl bg-amber-100 text-center" : "text-gray-700 hover:bg-orange-200 p-2 rounded-xl text-center"} to="/fav">Favroite</NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
