import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RacipeContext from './context/RacipeContext.jsx'

createRoot(document.getElementById('root')).render(
  <RacipeContext>
      <BrowserRouter>
        <App />
        <ToastContainer/>
      </BrowserRouter>
  </RacipeContext>
)
