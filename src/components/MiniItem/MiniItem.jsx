import "../../../node_modules/bootsrap icons/icons-1.3.0/font/bootstrap-icons.css";

const MiniItem = ({ imgSrc, imgClass, children, miniPrice }) => {
  return (
    <div style={{ width: "22%", marginTop: "25px" }}>
      <img src={imgSrc} className={imgClass} alt="" />
      <p className="mini-text2">{children}</p>
      <div className="ratings">
        <i className="bi bi-star icon"></i>
        <i className="bi bi-star icon"></i>
        <i className="bi bi-star icon"></i>
        <i className="bi bi-star icon"></i>
        <i className="bi bi-star icon"></i>
      </div>
      <p className="mini-text3">{miniPrice}</p>
    </div>
  );
};

export default MiniItem;

// so why do i need context API

// if you map, you'll still use components but if you use components you'll not map.==> understand tonight

// i sense i can map especially for the ratings, incase i want to get the amount of stars that will be coloured

// so if there's an issue or a problem i just need to come to the module and solve it right(was this what Mosh was saying) and would it also be a good reason to modularise my css
