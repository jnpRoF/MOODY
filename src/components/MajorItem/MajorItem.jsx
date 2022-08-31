import Button from "../Button/Button";

const MajorItem = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="major-wrapper">
        <div className="majorItem-wrap">
          <p className="mini-name">{children}</p>
          <p className="mini-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            elusmod tempor incicidunt ut laboreet dolore magna aliqua
          </p>
          <Button children="VIEW ALL" className="mini-btn" />
        </div>
      </div>
    </div>
  );
};

export default MajorItem;

// one reason why we might need to map, we can't have two children in a component, or is it possible?
