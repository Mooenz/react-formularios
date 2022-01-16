import FormularioNoControlado from './components/FormularioNoControlado';
import FormularioControlado from './components/FormularioControlado'
function App() {
  return (
    <section className="container py-4">
      <h1 className='fw-bold'>Formularios</h1>
      <FormularioNoControlado />
      <FormularioControlado />
    </section>
  );
}

export default App;
