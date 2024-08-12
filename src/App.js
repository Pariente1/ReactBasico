import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'cortar cebolla', completed: false },
  {text: 'tomar el curso de React', completed: true },
  {text: 'Llorar con la llorona', completed: false },
  {text: 'lalalal', completed: false },
  {text: 'lololol', completed: false }
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={20}/>
      <TodoSearch /> {/*Es el campo que nos deja filtar*/ }
      <TodoList>
        {defaultTodos.map(a => (
          <TodoItem 
          key={a.text} 
          text={a.text}
          completed={a.completed}
          />
          ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}


export default App;
