


const Course = (props) => {
    let total= props.course.parts.reduce(
      (sum, part) => sum + part.exercises, 0);;
  
    return (
      <div>
        <h2>{props.course.name}</h2>
        <ul>
          {props.course.parts.map((part) => (
            <li key={part.id}> {part.name} {part.exercises}</li>
          ))}
        </ul>
        <p>
          Total exercises = {total}
        </p>
      </div>
    );
  }
    

  export default Course