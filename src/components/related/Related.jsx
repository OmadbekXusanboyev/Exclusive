import React from "react";
import "./Related.css";
import { FaRegHeart } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

function Related({ products, setBigImg }) {
  const { new: newPrice, old: oldPrice } = products.price;
  return (
    <div>
      <div className="related-cards">
        <div className="card">
          <div className="card-img">
            {products.sale && <span className="sale">-{products.sale}%</span>}
            <span className="card-heart">
              <FaRegHeart />
            </span>
            <span className="card-eye">
              <IoEyeOutline />
            </span>

            <NavLink to={`/oneproduct/${products.id}`}>
              <img src={products.image} alt="" onClick={()=>{
                setBigImg(products.image)
              }}/>
            </NavLink>
            <button className="card-btn">Add To Cart</button>
          </div>
          <div className="card-info">
            <h4>{products.title}</h4>
            <div className="price">
              <p className="new">${newPrice}</p>
              {oldPrice && <p className="old">${oldPrice}</p>}
            </div>
            <div className="star">
              <img src="./images/Five star.svg" alt="" />
              (88)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Related;
