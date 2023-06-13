function Flex(props) {
  const flexStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  return (
    <div>
      <div style={flexStyle}>{props.children}</div>
    </div>
  );
}

export default Flex;
