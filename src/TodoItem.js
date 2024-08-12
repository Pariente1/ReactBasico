function TodoItem(props) { 
    return(
      <ul>
        <span>{props.completed}</span>
        <p>{props.text}</p>
        <span>{props.completed}</span>
      </ul>
    )
  }
  

export  {TodoItem};