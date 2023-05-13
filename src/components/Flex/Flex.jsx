function Flex({ children, title }) {
  const flexStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "blue" }}>{title}</h2>
      <div style={flexStyle}>{children}</div>
    </div>
  );
}

export default Flex;
