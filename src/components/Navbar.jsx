import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-30 mb-10 text-2xl'>
      <NavLink className={(e)=>e.isActive ? "text-orange-500" : ""} to="/">Home</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-orange-500" : ""} to="/recipes">Recipes</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-orange-500" : ""} to="/about">About</NavLink>
      <NavLink className={(e)=>e.isActive ? "text-orange-500" : ""} to="/create">Create Recipes</NavLink>
    </div>
  )
}

export default Navbar
