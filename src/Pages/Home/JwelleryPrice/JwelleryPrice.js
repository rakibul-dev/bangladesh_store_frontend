import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getUnits } from "../../../redux/actions/unitAction";
import "./JwelleryPrice.css";
import PriceData from "./PriceData";

const JwelleryPrice = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const { loading, error, units } = useSelector((state) => state.units);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getUnits());
  }, []);

  return (

    <div className="ticker">
      <div className="news " >
        <marquee >
          <div style={{ display: 'flex', color: 'rgb(69 59 59)' }}>
            {units &&
              units.map((item) => (
                <div style={{ borderRight: '2px solid #5d4b4b', }} > <PriceData key={item.name} item={item}></PriceData></div>
              ))}
          </div>

        </marquee>
      </div>
    </div>

  );
};

export default JwelleryPrice;
