import { useState } from 'react'




const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  return(
  <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {bad+good+neutral}</p>
    <p>average {good-bad}</p>
    <p>positive {((good)*100)/(bad+good+neutral)}%</p>
  </div>
  )

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feeedback</h1>
      <Button handleClick={() =>setGood(good +1)} text="good" />
      <Button handleClick={()=>setNeutral (neutral+1)} text="neutral"/>
      <Button handleClick={()=>setBad(bad +1)} text="bad" />
      
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>





    </div>
  )
}

export default App