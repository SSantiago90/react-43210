import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ViewCount from "../components/ViewCount/ViewCount";

function Homepage() {
  return (
    <div style={{ marginTop: "110px" }}>
      <ViewCount initialValue={1} />
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default Homepage;
