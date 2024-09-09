import { useState } from 'react'
import './App.css'
import ColorPicker from './assets/ColorPicker'
import Footer from './assets/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ColorPicker />
     <Footer />
    </>
  )
}

export default App
