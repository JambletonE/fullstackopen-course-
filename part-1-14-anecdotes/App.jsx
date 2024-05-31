import { useState } from 'react'

const Button = ({ handleClick, text,random_num }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const MostVotes = ({anecdotes, points})=>{

  let max_points= 0
  let favourite_index = 0
  for(let i =0; i<anecdotes.length;i++){

    if (points[i]>=max_points){
        max_points=points[i];
        favourite_index = i
    }



  }
    console.log(anecdotes[favourite_index])
    return(

    <div>
      <p>{anecdotes[favourite_index]}</p>
      <p>has {max_points} votes</p>

    </div>

    )


}

const NewPoints = (points,selected)=> {
  
  const new_points = [...points] 
  new_points[selected] += 1;
  return(

    new_points
  )


}
const App = () => {
  const max = 7
  const [points, setPoints]= useState(new Array(8).fill(0))
  

  
  const anecdotes = [
    'If it hurts, do it more often.', 
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  return (
    <div>
      <h1>Anecdote of the day</h1>   
      <p>{anecdotes[selected]}</p>
      <Button handleClick={() =>setSelected(()=>Math.floor(Math.random() * anecdotes.length))} text="next anecdote" />
      <Button handleClick={() =>setPoints(NewPoints(points,selected))} text="vote"  />
      <p></p>
      <p>Anecdote number: {selected + 1}</p>
      <p>Votes = {points[selected]}</p>
      <h1>Anecdote with the most votes</h1>
      <MostVotes anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App