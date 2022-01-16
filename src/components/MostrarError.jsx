const MostrarError = (props) => {
  const { mensaje } = props;
  return (
    <>
      <div className="alert alert-danger">{mensaje}</div>
    </>
  );
};

export default MostrarError;
