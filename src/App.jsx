import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='bg-gray-600 md:h-screen h-screen w-screen text-white md:py-10 py-7 md:px-20 px-7'>
      <Navbar/>
      <Mainroutes />
    </div>
  )
}

export default App
