import './App.css'
import { useState } from 'react'
import users from './data/users.json'
import Cards from './components/Cards'

function App() {

  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595" ]
 
  const randomIndex = Math.floor( Math.random() * colors.length )
  const [indx, setIndex] = useState( randomIndex )
  
  const changeIndex = () => {
    const newRandom =  Math.floor( Math.random() * colors.length )
    setIndex( newRandom )
  }
  document.body.style = `background-color: ${colors[indx]}`
  

  return (
    <div className="container-app">

    <div className="App">   
      <Cards
      userContent={users[indx]}  
      color={colors[indx]}     
      />
    <button onClick={ changeIndex }><i className='bx bxs-chevrons-right bx-md'></i></button>

    </div>
    </div>
  )
}

export default App
