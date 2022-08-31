import "../../../node_modules/bootsrap icons/icons-1.3.0/font/bootstrap-icons.css";
import "../../css/style.css";

const Nav = () => {
  return (
    <div className="nav-cont">
      <div className="nav-wrapper">
        <h2>MOODY STUDIO</h2>
        <div className="nav-icons">
          <i className="bi bi-search icons"></i>
          <i className="bi bi-person icons"></i>
          <i className="bi bi-bag-check icons"></i>
          <i className="bi bi-heart icons"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
