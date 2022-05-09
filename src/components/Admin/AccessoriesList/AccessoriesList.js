import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getAdminAccessories,
} from "../../../redux/actions/accessoriesAction";
import Spinner from "../../spinner/Spinner";
import Sidebar from "../Sidebar/Sidebar";
import AccessoriesData from "./AccessoriesData";

const AccessoriesList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, accessories, loading } = useSelector(
    (state) => state.accessories
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminAccessories());
  }, [dispatch, alert, error]);
  console.log(accessories);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Sidebar></Sidebar>
            </div>
            <div className="col-8">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ACCESSORY NAME</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">CATEGORY</th>

                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {accessories &&
                    accessories.map((item) => (
                      <AccessoriesData
                        key={item._id}
                        item={item}
                      ></AccessoriesData>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessoriesList;
