import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Mainroutes from './routes/Mainroutes'
import { animate } from 'motion'

const App = () => {
  // Add page transition animations
  useEffect(() => {
    // Animate the main container when the app loads
    animate(
      '.main-container',
      { opacity: [0, 1] },
      { duration: 0.5, easing: 'ease-out' }
    )
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white'>
      <div className='main-container max-w-[1400px] mx-auto min-h-screen flex flex-col'>
        <header className='sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md'>
          <Navbar />
        </header>
        <main className='flex-grow px-4 md:px-8 lg:px-12 py-6'>
          <Mainroutes />
        </main>
        <footer className='bg-black/30 backdrop-blur-sm py-6 px-4 md:px-8 text-center'>
          <p className='text-gray-400'>&copy; {new Date().getFullYear()} Food Recipes. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
