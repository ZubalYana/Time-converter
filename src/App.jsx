import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  function convertTime(){
    let time = document.querySelector('input').value
    axios.post('http://localhost:3000/convertTime', {time})
    .then((res)=>{
      console.log(res.data)
    })
  }
  return (
    <>
    <h3>Enter time:</h3>
    <input type="time" />
    <button onClick={convertTime}>Convert time</button>
    </>
  )
}

export default App
