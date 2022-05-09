import React from "react";

const Accessory = ({ item }) => {
  const { name, price, images } = item;

  return (
    <div className="col">
      <div class="card">
        <div>
          {images &&
            images.map((item, i) => (
              <img
                className="img-fluid"
                key={item.url}
                src={item.url}
                alt={`${i}`}
              ></img>
            ))}
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Price:{price}TK</p>
        </div>
      </div>
    </div>
  );
};

export default Accessory;
