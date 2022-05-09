import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getUnits } from "../../../redux/actions/unitAction";
import Spinner from "../../spinner/Spinner";
import Sidebar from "../Sidebar/Sidebar";
import UnitPriceData from "./UnitPriceData";

const UnitPriceList = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, units, loading } = useSelector((state) => state.units);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getUnits());
  }, [dispatch, alert, error]);
  console.log(units);

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
                    <th scope="col">UNIT TYPE</th>
                    <th scope="col">PRICE</th>

                    <th scope="col">EDIT</th>
                    <th scope="col">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {units &&
                    units.map((item) => (
                      <UnitPriceData key={item._id} item={item}></UnitPriceData>
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

export default UnitPriceList;
