import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  createAccessories,
} from "../../../../redux/actions/accessoriesAction";
import { NEW_ACCESSORIES_RESET } from "../../../../redux/constants/accessoriesConstant";
import Sidebar from "../../Sidebar/Sidebar";

const categories = ["Bag", "Box", "Machine", "Manufacture Item"];
const NewAccessory = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector(
    (state) => state.newAccessory
  );

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const accessory = { ...inputs, images: images };
  console.log(accessory);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Accessory Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: NEW_ACCESSORIES_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  // Handle Create Accessory
  const handleCreateAccessory = (e) => {
    e.preventDefault();

    dispatch(createAccessories(accessory));
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
        <h1>Create New Accessory</h1>
        <div className="row mt-5 mb-5">
          <div className="col-4">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8">
            {/* New Product Form  */}

            <form
              encType="multipart/form-data"
              onSubmit={handleCreateAccessory}
            >
              <div className="mt-3">
                <input
                  style={{ width: '50%' }}
                  type="text"
                  placeholder="Accessory Name"
                  required
                  name="name"
                  onChange={handleChange}
                // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  style={{ width: '50%' }}
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  // onChange={(e) => setPrice(e.target.value)}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-3">
                <textarea
                  style={{ width: '50%' }}
                  placeholder=" Description"
                  required
                  name="description"
                  cols="30"
                  rows="1"
                  onChange={handleChange}
                // onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <select style={{ width: '50%' }} name="category" onChange={handleChange}>
                  {categories.map((cate) => (
                    <option key={cate} value={cate}>
                      {cate}
                    </option>
                  ))}
                </select>
              </div>

              {/* Images */}
              <div className="mt-3">
                <input
                  style={{ width: '50%' }}
                  type="file"
                  name="avatar"
                  accept="image/*"
                  multiple
                  onChange={createProductImagesChange}
                // onChange={(e) => setImages(e.target.files)}
                />
              </div>

              <div>
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div>

              <button className="mt-3" type="submit" disabled={loading ? true : false}>
                Create Accessory
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAccessory;
