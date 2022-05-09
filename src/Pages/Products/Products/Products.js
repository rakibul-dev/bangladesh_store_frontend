import React from "react";
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import css from './Products.css'

const Products = ({ product, units }) => {
  const { name, images, _id, weight, type, productId, price } = product;
  console.log(units);

  console.log(type)

  let Finalprice;

  if (type === "Gold 18 karat") {

    Finalprice = `${units[0].price / 11.6638}`;
    console.log("this is 18")
  }
  if (type === "Gold 21 karat") {
    Finalprice = `${units[1].price / 11.6638}`;
    console.log("this is 19")
  }

  if (type === "Gold 22 karat") {
    Finalprice = `${units[2].price / 11.6638}`;
    console.log("this is 21")

  }
  if (type === "Gold 24 karat") {
    Finalprice = `${units[3].price / 11.6638}`;
    console.log("this is 24")
  }
  if (type === "Silver 21 karat") {
    Finalprice = `${units[4].price / 11.6638}`;
    console.log(Finalprice)

  }
  if (type === "Silver 24 karat") {
    Finalprice = `${units[5].price / 11.6638}`;
    console.log(Finalprice)
  };
  let mainPrice = Finalprice * weight;
  console.log(Finalprice)
  return (

    <div className="col mb-5">

      <div class="card  shadow color  mt-5">
        <div>
          {images &&
            images.map((item, i) => (
              <img
                className="img-fluid"
                key={item.url}
                src={item.url}
                height="100px"
                alt={`${i}`}
              ></img>
            ))}
        </div>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p className="">{productId}</p>
          {type !== "Diamond" ? <p className="">{type}</p> : ""}
          {type !== "Diamond" ? <p class="card-text">Weight:{weight}gm</p> : ""}
          {type !== "Diamond" ? <p class="card-text"><span style={{}}>Price</span>:{mainPrice.toFixed(3)}+{price}</p> : <p class="card-text"><span style={{}}>Price</span>:{price}</p>}
          <Nav.Link href="/contactus"><button style={{ border: 'none', backgroundColor: '#d4caca', borderRadius: "4px", boxShadow: "3px 3px 3px 3px #cba0a0" }}>Purchase</button></Nav.Link>






        </div>
      </div>
    </div >
  );
};

export default Products;
