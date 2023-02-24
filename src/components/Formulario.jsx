import { useState } from "react";
import Swal from 'sweetalert2';

const Formulario = ({addTodo}) => {
  /* const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("pendiente"); */
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });

  const {title, description, state, priority} = todo

  const handleSubmit = (e) => {
    e.preventDefault();

    /* validaciones */
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Título y descripción obligatorios',
      })
      
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === 'completado'
    })

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo agregado correctamente',
      showConfirmButton: false,
      timer: 1500
    })

    //console.log(title, description, state, priority);
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    //console.log(e.target.name);

    //setTodo({...todo, priority: e.target.checked})
    setTodo({

        /* desestructuración target / const {name,type,checked,value} = e.target */
      ...todo,
      //[e.target.name]: e.target.value,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
        value={title}
        //onChange={(e) => setTodo({...todo, title: e.target.value})}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        //onChange={(e) => setTodo({...todo, description: e.target.value})}
        onChange={handleChange}
      />

      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar prioridad</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        //</form>onChange={(e) => setTodo({...todo, state: e.target.value})}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar todo
      </button>
    </form>
  );
};

export default Formulario;
