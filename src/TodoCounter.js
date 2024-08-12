import './TodoCounter.css';

function TodoCounter({completed, total}) {

  return (
    <h1>
      Has completado {completed} de {total} Tudus
    </h1>
  );
}

export {TodoCounter};

