import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../redux/actions/productAction";

const ProductListData = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { _id, name, Stock, price, weight, type } = product;

  // useEffect(() => {
  //   navigate("/admin/products");
  // }, [navigate]);

  // Delete Product Handler
  const deleteProductHandler = (id) => {
    // Checking before delete
    const proceed = window.confirm("Are Your Sure ???");
    if (proceed) {
      dispatch(deleteProduct(id));

      alert.success("Product Deleted Successfully");
      navigate("/admin/dashboard");
    }
  };

  return (
    <tr>
      <th scope="row">{name}</th>

      <td>{price}</td>
      <td>{Stock}</td>
      <td>{weight}</td>
      <td>{type}</td>
      <td>
        <Link to={`/admin/product/${_id}`}>Edit </Link>
      </td>
      <td>
        <button onClick={() => deleteProductHandler(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ProductListData;
