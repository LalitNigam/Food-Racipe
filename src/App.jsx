import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='bg-gray-600 h-screen w-screen text-white py-10 px-20'>
      <Navbar/>
      <Mainroutes />
    </div>
  )
}

export default App
