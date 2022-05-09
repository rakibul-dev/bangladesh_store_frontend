import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  createProduct,
} from "../../../../redux/actions/productAction";
import { NEW_PRODUCT_RESET } from "../../../../redux/constants/productConstants";
import Sidebar from "../../Sidebar/Sidebar";

const categories = [
  "product catagory",
  "Gold Anklet",
  "Gold Bala",
  "Gold Bangal",
  "Gold Bracelet",
  "Gold Crown",
  "Gold Chur",
  "Gold Chain",
  "Gold Earrings",
  "Gold Finger Ring",
  "Gold Locket",
  "Gold Mangalsutra",
  "Gold Nosepin",
  "Gold Necklace",
  "Gold Pola",
  "Gold Shakha",
  "Gold Shitahar",
  "Gold Tiara",
  "Gold Tikli",
  "Gold Others",

  "Silver Anklet",
  "Silver Bala",
  "Silver Bangal",
  "Silver Crown",
  "Silver Chur",
  "Silver Chain",
  "Silver Earrings",
  "Silver Finger Ring",
  "Silver Locket",
  "Silver Mangalsutra",
  "Silver Nosepin",
  "Silver Necklace",
  "Silver Pola",
  "Silver Shakha",
  "Silver Shitahar",
  "Silver Tiara",
  "Silver Tikli",
  "Silver Others",
  "Diamond",
];

const types = [
  "Product type",
  "Gold 18 karat",
  "Gold 21 karat",
  "Gold 22 karat",
  "Gold 24 karat",

  "Silver 21 karat",
  "Silver 24 karat",

  "Diamond",
];

const NewProduct = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const product = { ...inputs, images: images };
  console.log(product);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const handleCreateProduct = (e) => {
    e.preventDefault();

    dispatch(createProduct(product));
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="container">
        <h1>Create New Product</h1>
        <div className="row mt-5 mb-5">
          <div className="col-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8">
            {/* New Product Form  */}

            <form
              style={{ width: "70%" }}
              encType="multipart/form-data"
              onSubmit={handleCreateProduct}
            >
              <div style={{ marginTop: 20, margin: "auto" }}>
                <input
                  style={{ width: "60%" }}
                  type="text"
                  placeholder="Product Name"
                  required
                  name="name"
                  onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  style={{ width: "60%" }}
                  type="text"
                  placeholder="Product Code"
                  required
                  name="productId"
                  onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <input
                  style={{ width: "60%" }}
                  name="price"
                  type="number"
                  placeholder="Making Cost"
                  required
                  // onChange={(e) => setPrice(e.target.value)}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="mt-2">
                <textarea
                  style={{ width: "60%" }}
                  placeholder="Product Description"
               
                  name="description"
                  cols="30"
                  rows="1"
                  onChange={handleChange}
                // onChange={(e) => setDescription(e.target.value)}
                />
              </div> */}

              <div className="mt-2">
                <input
                  style={{ width: "60%" }}
                  // type="number"
                  placeholder="Product Weight"
                  required
                  name="weight"
                  onChange={handleChange}
                // onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="mt-2">
                <select
                  style={{ width: "60%" }}
                  name="category"
                  // placeholder="Category"
                  onChange={handleChange}
                >
                  {categories.map((cate) => (
                    <option key={cate._id} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-2">
                <select
                  style={{ width: "60%" }}
                  name="type"
                  onChange={handleChange}
                >
                  {types.map((type) => (
                    <option key={type._id} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="mt-2">
                <input
                  style={{ width: "60%" }}
                  type="number"
                  placeholder="Stock"
                  required
                  name="Stock"
                  onChange={handleChange}
                // onChange={(e) => setStock(e.target.value)}
                />
              </div> */}

              {/* Images */}
              <div className="mt-2">
                <input
                  style={{ width: "60%" }}
                  type="file"
                  name="avatar"
                  accept="image/*"
                  multiple
                  onChange={createProductImagesChange}
                // onChange={(e) => setImages(e.target.files)}
                />
              </div>

              <div className="mt-2">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>

              <button
                className="mt-3"
                type="submit"
                disabled={loading ? true : false}
              >
                Create Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
