function Flex({ children }) {
  const flexStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <div>
      <div style={flexStyle}>{children}</div>
    </div>
  );
}

export default Flex;
