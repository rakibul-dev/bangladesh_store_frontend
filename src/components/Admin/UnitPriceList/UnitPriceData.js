import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUnit } from "../../../redux/actions/unitAction";

const UnitPriceData = ({ item }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { _id, type, price } = item;

  // Delete Unit Handler
  const deleteUnitHandler = (id) => {
    // Checking before delete
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(deleteUnit(id));

      alert.success("Unit Deleted Successfully");
      navigate("/admin/dashboard");
    }
  };

  return (
    <tr>
      <th scope="row">{type}</th>

      <td>{price}</td>

      <td>
        <Link to={`/admin/unit/${_id}`}>Edit </Link>
      </td>
      <td>
        <button onClick={() => deleteUnitHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UnitPriceData;
