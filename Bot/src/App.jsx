import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotsContainer from './Bots/BotContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3 style={{color: "green"}}>BOT-COLLECTION</h3>
      <BotsContainer/>
    </div>
  )
}

export default App
