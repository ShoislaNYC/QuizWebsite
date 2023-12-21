import { useState } from 'react'
import './App.css'
import quizlogo from './assets/QuizLogo2.png'
import NavBar from './components/NavBar'
import PlayButton from './components/PlayButton'
import MyFooter from './components/MyFooter'
// import {Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={quizlogo} className='logo' alt='Anime Quiz: made by Shohag'/>
      <nav>
      <PlayButton />
      </nav>
      <MyFooter />
    </>
  )
}
export default App
