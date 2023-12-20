import { useState } from 'react'
import quizlogo from './assets/QuizLogo2.png'
import './App.css'
import NavBar from './components/NavBar'
import PlayButton from './components/PlayButton'
import MyFooter from './components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={quizlogo} className='logo' alt='Anime Quiz: made by Shohag'/>
      <NavBar />
      <PlayButton />
      <MyFooter />

    </>
  )
}
export default App
