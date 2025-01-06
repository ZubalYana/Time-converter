import './App.css'
import axios from 'axios'

function App() {
  function convertTime(){
    let time = document.querySelector('input').value
    axios.post('http://localhost:3000/convertTime', {time})
    .then((res)=>{
      console.log(res.data)
      document.querySelector('#convertedTime').innerHTML = res.data
    })
  }
  return (
    <div className='wrap'>
    <h3>Enter time:</h3>
    <div className="timeConvertion">
      <input type="time" class="custom-time-input" />
      <button onClick={convertTime} className='convertBtn'>Convert time</button>
    </div>
    <h3>Converted time: <div id="convertedTime"></div></h3>
    </div>
  )
}

export default App
