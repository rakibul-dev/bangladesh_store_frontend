import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, updateUnit } from "../../../../redux/actions/unitAction";
import { UPDATE_UNIT_RESET } from "../../../../redux/constants/unitConstant";
import Spinner from "../../../spinner/Spinner";
import Sidebar from "../../Sidebar/Sidebar";


const types = [
  "Gold 18 karat",
  "Gold 21 karat",
  "Gold 22 karat",
  "Gold 24 karat",

  "Silver 21 karat",
  "Silver 24 karat",

  "Diamond",
];

const UpdateUnit = () => {
  const [inputs, setInputs] = useState({});

  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const id = useParams();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.updateUnit
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const unitData = { ...inputs };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Unit Updated Successfully");
      navigate("/admin/units");
      dispatch({ type: UPDATE_UNIT_RESET });
    }
  }, [dispatch, alert, error, navigate, isUpdated]);

  //  Handle Update Unit
  const handleUpdateUnit = (e) => {
    e.preventDefault();

    // Checking before Update
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(updateUnit(id.id, unitData));
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <h1>Update Unit Info</h1>
          <div className="row mt-5 mb-5">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              {/* New Product Form  */}
              <form encType="multipart/form-data" onSubmit={handleUpdateUnit}>
                {/* <div>
                  <input
                    style={{ width: '50%' }}
                    type="text"
                    placeholder="Unit Name"
                    required
                    name="name"
                    onChange={handleChange}
                  // onChange={(e) => setName(e.target.value)}
                  />
                </div> */}

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
                    style={{ width: '50%' }}
                    name="price"
                    type="number"
                    placeholder="Price"
                    required
                    // onChange={(e) => setPrice(e.target.value)}
                    onChange={handleChange}
                  />
                </div>

                <button className="mt-3" type="submit" disabled={loading ? true : false}>
                  Update Unit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateUnit;
