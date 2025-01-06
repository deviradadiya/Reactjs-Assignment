import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Product from './Product'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Counter/>
    <Product/>
     
    </>
  )
}

export default App
