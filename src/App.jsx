import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
       <ToastContainer></ToastContainer>
      </div>
     
    </>
  )
}

export default App
