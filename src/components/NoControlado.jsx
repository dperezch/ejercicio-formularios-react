import { useRef, useState } from "react";

const NoControlado = () => {

    const form = useRef(null)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('')
        //console.log(form.current);
        //console.log(new FormData(form.current));

        /* CAPTURAR LOS DATOS */
        const data = new FormData(form.current)

        console.log([...data.entries()]); /* spread operator ... / permite a un elemento iterable ser expandido, copia cada uno de sus elementos*/
        
        //Object.fromEntries() transforma una lista de pares con [clave-valor] en objetos
        //const dataObject = Object.fromEntries([...data.entries()]);

        //modo desestructuración
        const {title, description, state} = Object.fromEntries([...data.entries()]);

        console.log(title, description, state);

        /* VALIDADR LOS DATOS */
        if (!title.trim()) {
            return setError("Llena todos los campos");
        }

        /* ENVIAR LOS DATOS */
    }
  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
      />
      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary" >Procesar</button>

      {
        error !== '' && error
      }
    </form>
  );
};

export default NoControlado;
