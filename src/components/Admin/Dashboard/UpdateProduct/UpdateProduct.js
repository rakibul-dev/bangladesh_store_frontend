import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  getProductDetails,
  updateProduct,
} from "../../../../redux/actions/productAction";
import { UPDATE_PRODUCT_RESET } from "../../../../redux/constants/productConstants";
import Spinner from "../../../spinner/Spinner";
import Sidebar from "../../Sidebar/Sidebar";

const categories = [
  "Gold Anklet",
  "Gold Bala",
  "GOld Bangal",
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
];

const types = [
  "Gold 18 karat",
  "Gold 21 karat",
  "Gold 22 karat",
  "Gold 22 karat",

  "Silver 21 karat",
  "Silver 24 karat",

  "Diamond",
];

const UpdateProduct = () => {
  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);

  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const id = useParams();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateProduct
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const productData = { ...inputs, images: images };
  // console.log(productData);

  useEffect(() => {
    if (product && product._id !== id.id) {
      dispatch(getProductDetails(id.id));
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      navigate("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [
    dispatch,
    id.id,
    product,
    alert,
    error,
    navigate,
    isUpdated,
    updateError,
  ]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    // Checking before Update
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(updateProduct(id.id, productData));
    }
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    // setOldImages([]);

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
      {" "}
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1>Update Product</h1>
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              {/* New Product Form  */}

              <form
                encType="multipart/form-data"
                onSubmit={handleUpdateProduct}
              >
                <div className="mt-2">
                  <input
                    style={{ width: "50%" }}
                    type="text"
                    required
                    placeholder={product.name}
                    defaultValue={product.name}
                    name="name"
                    onChange={handleChange}
                  // onChange={(e) => setName(e.target.defaultValue)}
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
                    style={{ width: "50%" }}
                    name="price"
                    type="number"
                    placeholder={product.price}
                    defaultValue={product.price}
                    required
                    // onChange={(e) => setPrice(e.target.defaultValue)}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <textarea
                    style={{ width: "50%" }}
                    placeholder={product.description}
                    defaultValue={product.description}
                    required
                    name="description"
                    cols="30"
                    rows="1"
                    onChange={handleChange}
                  // onChange={(e) => setDescription(e.target.defaultValue)}
                  />
                </div>
                <div className="mt-2">
                  <input
                    style={{ width: "50%" }}
                    type="number"
                    placeholder={product.weight}
                    defaultValue={product.weight}
                    required
                    name="weight"
                    onChange={handleChange}
                  // onChange={(e) => setWeight(e.target.defaultValue)}
                  />
                </div>

                <div className="mt-2">
                  <select
                    style={{ width: "50%" }}
                    name="category"
                    onChange={handleChange}
                    placeholder={product.category}
                    defaultValue={product.category}
                  >
                    {categories.map((cate) => (
                      <option key={cate} defaultValue={cate}>
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

                <div className="mt-2">
                  <input
                    style={{ width: "50%" }}
                    type="number"
                    placeholder={product.Stock}
                    defaultValue={product.Stock}
                    required
                    name="Stock"
                    onChange={handleChange}
                  // onChange={(e) => setStock(e.target.defaultValue)}
                  />
                </div>

                {/* Images */}
                <div className="mt-2">
                  <input
                    style={{ width: "50%" }}
                    type="file"
                    name="avatar"
                    accept="image/*"
                    multiple
                    onChange={createProductImagesChange}
                  // onChange={(e) => setImages(e.target.files)}
                  />
                </div>

                {/* <div>
              {oldImages &&
                oldImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt="Old Product Preview"
                  />
                ))}
            </div> */}

                <div>
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                  ))}
                </div>

                <button
                  className="mt-3"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  Update Product
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
