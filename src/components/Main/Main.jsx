import ItemDisplay from "../ItemDisplay/ItemDisplay";
import images from "../../constants/images";
import SubMain from "../SubMain/SubMain";
const Main = () => {
  return (
    <>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "90%", display: "flex" }}>
          <ItemDisplay
            backgroundColor="#fafafa"
            imgSrc={images.chair}
            children={"INY VINTAGE CHAIR"}
          />
          <ItemDisplay
            backgroundColor="#eae9e7"
            imgSrc={images.pot}
            children="LARGE TERRACOTA VASE"
          />
        </div>
      </div>
      <SubMain />
    </>
  );
};

export default Main;

// can i map instead of making components, in short what is their relationship

// use div and fragment and compare
