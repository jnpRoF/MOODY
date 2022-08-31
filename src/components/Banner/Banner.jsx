import images from "../../constants/images";
import Button from "../Button/Button";
const Banner = () => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${images.banner})` }}
    >
      <div className="banner-wrap">
        <p className="banner-text">HOT DEALS THIS WEEK</p>
        <p className="banner-text2">SALE UP 50% MODERN FURNITURE</p>
        <Button className="btn">VIEW NOW</Button>
      </div>
    </div>
  );
};

export default Banner;
