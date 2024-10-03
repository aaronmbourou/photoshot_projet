import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/AppBar'
import Diaporama from './components/Diaporama'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen'> 
        <Appbar/>
        <Diaporama/>
      </div>
     
    </>
  )
}

export default App
