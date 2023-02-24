import Formulario from "./components/Formulario";
import Todos from "./components/Todos";
import { useEffect, useState } from "react";

const initialStateTodos = JSON.parse(localStorage.getItem('todos')) || [];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  /* Local Storage */
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

  /* agregar todo */
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  /* Eliminar todo */
  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id != id);

    setTodos(newArray);
  };

  /* Actualizar todos */
  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    });
    setTodos(newArray);
  };

  /* Ordenar todos */
  const orderTodo = (arraytodos) => {
    return arraytodos.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1; //a.priority === true
      if (!a.priority) return 1; //a.priority === false
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo} />
      <Todos
        todos={orderTodo(todos)}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default App;
