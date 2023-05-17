function withConsoleLog(Component) {
  function WrappedComponent(props) {
    console.log("Hola desde el HOC del componente", Component.name);

    return (
      <>
        <Component {...props} />
      </>
    );
  }
  return WrappedComponent;
}

export default withConsoleLog;
