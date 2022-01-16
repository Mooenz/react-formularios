import { useState } from 'react';
import MostrarError from './MostrarError';

const FormularioControlado = () => {
  const [todo, setTodo] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'pendiente',
    todoCheck: false,
  });

  const { todoName, todoDescripcion, todoEstado, todoCheck } = todo;

  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    !todoDescripcion.trim() || !todoName.trim()
      ? setError(true)
      : setError(false);

    console.log('Enviando datos...');
  };

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setTodo({
      ...todo,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <section className="bg-dark text-white my-4 p-4 rounded">
      <h2>Controlado</h2>

      {error && <MostrarError mensaje={'Campos obligatorios'} />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese ToDo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todoName}
        />

        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="Ingrese descripción del todo"
          cols="10"
          rows="5"
          onChange={handleChange}
          value={todoDescripcion}
        />

        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completo">Completo</option>
        </select>

        <div className="my-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="todoCheck"
            checked={todoCheck}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            dar Prioridad
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </section>
  );
};

export default FormularioControlado;
