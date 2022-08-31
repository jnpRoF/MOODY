import images from "./images";

const data = [
  {
    id: 1,
    photo: images.flag,
    name: "Linen Beach Towel",
    ratingAvg: 4.0,
    price: "30",
  },
  {
    id: 2,
    photo: images.plateBox,
    name: "Square Clear Glass Box",
    ratingAvg: 3.5,
    price: "50",
  },
  {
    id: 3,
    photo: images.roundPlate,
    name: "4-pack Small Ceramic Plates",
    ratingAvg: 3.0,
    price: "40",
  },
  {
    id: 4,
    photo: images.plateRack,
    name: "Large Clear Glass Box",
    ratingAvg: 2.5,
    price: "35",
  },
  {
    id: 5,
    photo: images.plate,
    name: "Round Jute Placemat",
    ratingAvg: 2.0,
    price: "45",
  },
  {
    id: 6,
    photo: images.ironBasket,
    name: "Metal Wire Basket",
    ratingAvg: 3.0,
    price: "60",
  },
];

export const getAllProducts = () => {
  return data;
};

// export const getAllProducts = async ()=>{
// const res = await fetch('https://my-app-fake/products')
// const data = await res.json();

// return data
// }
