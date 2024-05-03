
import './App.css'
import useTimer from './Timer'

function App() {
  const [timer, startTimer, stopTimer, resetTimer, isRunning] = useTimer(10)

  return (
    <>
    <h1>Custom Hook Timer</h1>
      {timer}
      {isRunning?<div>Timer is Running</div> : <div>Timer Stopped</div>}
      <button onClick={()=>startTimer()}>Start</button>
      <button onClick={()=>stopTimer()}>Stop</button>
      <button onClick={()=>resetTimer()}>Reset</button>
    </>
  )
}

export default App
