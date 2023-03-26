import React from "react";

const ItemsInCarts = ({ singleProd }) => {
  return (
    <div className="singleProduct">
      <div>
        <img src={singleProd?.image} alt="" />
      </div>
      <div className="rating">
        <h3>{singleProd?.rating.rate} stars</h3>
        <h5> Total Rating {singleProd?.rating.count}</h5>
      </div>
      <div className="textWrapper">
        <div>
          <h1>$ {singleProd?.price} </h1>
        </div>
        <h2>{singleProd?.title}</h2>
        <p>{singleProd?.description}</p>
      </div>
    </div>
  );
};

export default ItemsInCarts;
