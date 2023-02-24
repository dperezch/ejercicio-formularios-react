const Todo = ({ todo, deleteTodo, updateTodo }) => {
  const { title, description, state, priority, id } = todo;
  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={`${state && "text-decoration-line-through"}`}>
            {title}
          </h5>
          <p className={`${state && "text-decoration-line-through"}`}>
            {" "}
            {description}{" "}
          </p>
          <div className="d-flex gap-2">
            <button
              onClick={() => deleteTodo(id)}
              className="btn btn-sm btn-danger"
            >
              Eliminar
            </button>
            <button
              onClick={() => updateTodo(id)}
              className="btn btn-sm btn-warning"
            >
              Actualizar
            </button>
          </div>
        </div>
        <div>
          {state && (
            <span className="badge text-bg-success mx-1"> Completado </span>
          )}
          {priority && (
            <span className="badge text-bg-primary mx-1"> Prioritario </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Todo;
