import { useRef } from 'react';

const FormularioNoControlado = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const datos = new FormData(form.current);

    const objetoDatos = Object.fromEntries([...datos.entries()]);

    const { todoDescripcion, todoName } = objetoDatos;

    !todoDescripcion.trim() && !todoName.trim()
      ? console.log('Campos vacios')
      : console.log('Validacion correcta');
  };

  return (
    <section className='bg-secondary my-4 p-4 rounded'>
      <h2>No Controlado</h2>
      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese ToDo"
          name="todoName"
          className="form-control mb-2"
        />

        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción del todo"
          cols="10" 
          rows="5"
        />
        <select name="todoEstado" className="form-control mb-2">
          <option value="pendiente">Pendiente</option>
          <option value="completo">Completo</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </section>
  );
};

export default FormularioNoControlado;
