import { Data } from "../../Data/ClothData";
import {
  ClothsContainer,
  MobileView,
  ParentContainer,
  ProductContainer,
} from "./HomePageStyle";
import { AddToCartBtn } from "../../Constants/Button";
import SizeFilter from "../../components/filter/sizeFilter";
import { StyleImage } from "../../Constants/Images";
import { useState, useEffect } from "react";
import "./Style.css";

const storeClickedData = [];
let countItems = 0;
let totalCost = 0;

function HandleButtonClick(datas) {
  countItems += 1;
  totalCost += datas.price;
  storeClickedData.push(datas);
  localStorage.setItem("DatasId", JSON.stringify(storeClickedData));
}

export function TotalItems() {
  return storeClickedData.length;
}

export function TotalPrice() {
  return totalCost;
}

export function FetchDatas({ data }) {
  return data.map((datas, index) => {
    return (
      <ClothsContainer className = "ClothsContainer" key={index}>
        <StyleImage src={datas.image_url} alt="picture is un-available" />
        <p>{datas.name}</p>
        <p>Rs : {datas.price}</p>
        <b>{datas.size}</b>

        <div className="addToCartBtn">
          <AddToCartBtn
            className="AddToCartButton"
            id={datas.id}
            onClick={() => {
              HandleButtonClick(datas);
            }}
          >
            Add To Cart
          </AddToCartBtn>
        </div>
      </ClothsContainer>
    );
  });
}

function HomePage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(Data);
  }, []);
  return (
    <div>
      <ParentContainer className="row">
        <div>
        <SizeFilter setdata={setdata} data={Data} />
        </div>

        <div className="column">
          <ProductContainer>
            <FetchDatas data={data} />
          </ProductContainer>
        </div>
      </ParentContainer>
    </div>
  );
}

export default HomePage;
