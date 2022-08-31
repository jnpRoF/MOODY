import images from "../../constants/images";
import Button from "../Button/Button";
const Banner2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${images.bed})`,
        height: "500px",
        backgroundPosition: "top",
        backgroundSize: "cover",
        margin: "40px 0",
      }}
    >
      <div className="banner-cont">
        <div className="banner-wrap2">
          <div className="banner-wrap2-cont">
            <p
              className=""
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                margin: "75px 0 20px 0",
              }}
            >
              BEDSHEETS SETS
            </p>
            <p
              className=""
              style={{
                fontSize: "27px",
                fontWeight: "bold",
                color: "#7b5136",
                margin: "10px 0",
              }}
            >
              $50.00
              <s>
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "20px",
                    fontWeight: "bolder",
                    marginLeft: "15px",
                  }}
                >
                  $220.00
                </span>
              </s>
            </p>
            <p
              style={{
                fontWeight: "lighter",
                width: "340px",
                margin: "10px 0 20px 0",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              possimus laudantium.
            </p>
            <Button className="btn2">VIEW DETAILS</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
