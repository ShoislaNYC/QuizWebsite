import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import quizlogo from './assets/QuizLogo2.png'
import './App.css'
import myButton from './components/PlayButton.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={quizlogo} className='logo' alt='Anime Quiz: made by Shohag'/>
      <myButton />
      <NavBar />
      {/* <button></button> */}
    </>
  
  )
}
export default App
