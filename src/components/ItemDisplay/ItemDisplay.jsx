import Button from "../Button/Button";

const ItemDisplay = ({ imgSrc, children, backgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        width: "50%",
        height: "300px",
        margin: "15px",
      }}
    >
      <img src={imgSrc} />
      <div className="item-cont">
        <p className="item-display-name">{children}</p>

        <Button className="btn2">VIEW DETAILS</Button>
      </div>
    </div>
  );
};

export default ItemDisplay;

//can i have multiple children(for different elements) in a component?

//if i write all this in normal js will it work, especially the way i write style{{}}
