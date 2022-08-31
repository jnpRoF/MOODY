import React, { useEffect, useState } from "react";
import MajorItem from "../MajorItem/MajorItem";
import MiniItem from "../MiniItem/MiniItem";
import images from "../../constants/images";
import { getAllProducts } from "../../constants/products";

// const TopRate = () => {
// }

const SubMain = () => {
  const [rateProducts, setRateProducts] = useState(null);

  useEffect(() => {
    const rateProducts = getAllProducts();
    setRateProducts(rateProducts);
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div className="subMain-wrap">
        <MajorItem children="DECOR" className="majorItem-cont" />

        {/* {rateProducts?.map((product) => (
          <div style={{ width: "22%", marginTop: "25px" }}>
            <img src={product.photo} alt={product.name} className={{}} />
            <p className="mini-text2">{product.name}</p>
            <div className="ratings">
              <i className="bi bi-star icon"></i>
              <i className="bi bi-star icon"></i>
              <i className="bi bi-star icon"></i>
              <i className="bi bi-star icon"></i>
              <i className="bi bi-star icon"></i>
            </div>
            <p className="mini-text3">{product.price}</p>
          </div>
        ))} */}
        <MiniItem
          imgSrc={images.flag}
          imgClass="mini-img"
          children="Linen Beach Towel"
          miniPrice="30$"
        />
        <MiniItem
          imgSrc={images.plateBox}
          imgClass="mini-img"
          children="Square Clear Glass Box"
          miniPrice="30$"
        />
        <MiniItem
          imgSrc={images.roundPlate}
          imgClass="mini-img"
          children="4-pack Small Ceramic Plates"
          miniPrice="30$"
        />
        <MiniItem
          imgSrc={images.plateRack}
          imgClass="mini-img"
          children="Large Clear Glass Box"
          miniPrice="30$"
        />
        <MiniItem
          imgSrc={images.plate}
          imgClass="mini-img"
          children="Round Jute Placemat"
          miniPrice="30$"
        />
        <MiniItem
          imgSrc={images.ironBasket}
          imgClass="mini-img"
          children="Metal Wire Basket"
          miniPrice="30$"
        />
        <MajorItem children="BOHO CHIC" className="majorItem-cont2" />
      </div>
    </div>
  );
};

export default SubMain;

//i noticed when passing props you don't need commas

// i'm i sure i can't map here

// so if different elements have the same class name we'll have an "array" of different elements, right?
