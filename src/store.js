import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  accessoriesDetailsReducer,
  accessoryReducer,
  deleteAccessoryReducer,
  newAccessoryReducer,
  updateAccessoryReducer,
} from "./redux/reducers/accessoriesReducer";
import {
  deleteProductReducer,
  newProductReducer,
  newReviewReducer,
  productDetailsReducer,
  productReducer,
  updateProductReducer,
} from "./redux/reducers/productReducer";
import {
  deleteUnitReducer,
  newUnitReducer,
  unitsReducer,
  updateUnitReducer,
} from "./redux/reducers/unitReducer";
import { userReducer } from "./redux/reducers/userReducer";

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  newReview: newReviewReducer,
  newProduct: newProductReducer,
  deleteProduct: deleteProductReducer,
  updateProduct: updateProductReducer,

  accessories: accessoryReducer,
  accessoryDetails: accessoriesDetailsReducer,
  newAccessory: newAccessoryReducer,
  deleteAccessory: deleteAccessoryReducer,
  updateAccessory: updateAccessoryReducer,

  units: unitsReducer,
  newUnit: newUnitReducer,
  deleteUnit: deleteUnitReducer,
  updateUnit: updateUnitReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
