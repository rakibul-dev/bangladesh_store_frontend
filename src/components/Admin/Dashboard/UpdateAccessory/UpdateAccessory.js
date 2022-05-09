import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  getAccessoryDetails,
  updateAccessory,
} from "../../../../redux/actions/accessoriesAction";
import { UPDATE_ACCESSORIES_RESET } from "../../../../redux/constants/accessoriesConstant";
import Spinner from "../../../spinner/Spinner";
import Sidebar from "../../Sidebar/Sidebar";
const categories = ["Bag", "Box", "Machine", "Manufacture Item"];

const UpdateAccessory = () => {
  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const id = useParams();

  const { loading, error, accessory } = useSelector(
    (state) => state.accessoryDetails
  );

  const { error: updateError, isUpdated } = useSelector(
    (state) => state.updateAccessory
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const accessoryData = { ...inputs, images: images };
  console.log(accessoryData);

  useEffect(() => {
    if (accessory && accessory._id !== id.id) {
      dispatch(getAccessoryDetails(id.id));
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
      alert.success("Accessory Updated Successfully");
      navigate("/admin/accessories");
      dispatch({ type: UPDATE_ACCESSORIES_RESET });
    }
  }, [
    dispatch,
    id.id,
    accessory,
    alert,
    error,
    navigate,
    isUpdated,
    updateError,
  ]);

  //  Handle Update Accessory
  const handleUpdateAccessory = (e) => {
    e.preventDefault();

    // Checking before Update
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(updateAccessory(id.id, accessoryData));
    }
  };

  //   Image Handler
  const createAccessoryImagesChange = (e) => {
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
          <h1>Update Accessory</h1>
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              {/* New Product Form  */}

              <form
                encType="multipart/form-data"
                onSubmit={handleUpdateAccessory}
              >
                <div className="mt-2">
                  <input
                    style={{ width: '50%' }}
                    type="text"
                    required
                    placeholder={accessory.name}
                    defaultValue={accessory.name}
                    name="name"
                    onChange={handleChange}
                  // onChange={(e) => setName(e.target.defaultValue)}
                  />
                </div>
                <div className="mt-2">
                  <input
                    style={{ width: '50%' }}
                    name="price"
                    type="number"
                    placeholder={accessory.price}
                    defaultValue={accessory.price}
                    required
                    // onChange={(e) => setPrice(e.target.defaultValue)}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <textarea
                    style={{ width: '50%' }}
                    placeholder={accessory.description}
                    defaultValue={accessory.description}
                    required
                    name="description"
                    cols="30"
                    rows="1"
                    onChange={handleChange}
                  // onChange={(e) => setDescription(e.target.defaultValue)}
                  />
                </div>

                <div className="mt-2">

                  <select
                    style={{ width: '50%' }}
                    name="category"
                    onChange={handleChange}
                    placeholder={accessory.category}
                    defaultValue={accessory.category}
                  >
                    {categories.map((cate) => (
                      <option key={cate} defaultValue={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Images */}
                <div className="mt-2">
                  <input
                    style={{ width: '50%' }}
                    type="file"
                    name="avatar"
                    accept="image/*"
                    multiple
                    onChange={createAccessoryImagesChange}
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
                    <img key={index} src={image} alt="Accessory Preview" />
                  ))}
                </div>

                <button className="mt-3" type="submit" disabled={loading ? true : false}>
                  Update Accessory
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateAccessory;
