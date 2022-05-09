import React from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteAccessory } from "../../../redux/actions/accessoriesAction";

const AccessoriesData = ({ item }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { _id, name, price, category } = item;

  // Delete Accessory Handler
  const deleteAccessoryHandler = (id) => {
    // Checking before delete
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(deleteAccessory(id));

      alert.success("Accessory Deleted Successfully");
      navigate("/admin/dashboard");
    }
  };

  return (
    <tr>
      <th scope="row">{name}</th>

      <td>{price}</td>

      <td>{category}</td>

      <td>
        <Link to={`/admin/accessory/${_id}`}>Edit </Link>
      </td>
      <td>
        <button onClick={() => deleteAccessoryHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default AccessoriesData;
