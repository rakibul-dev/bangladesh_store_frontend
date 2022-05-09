import axios from "axios";
import {
  ACCESSORIES_DETAILS_FAIL,
  ACCESSORIES_DETAILS_REQUEST,
  ACCESSORIES_DETAILS_SUCCESS,
  ADMIN_ACCESSORIES_FAIL,
  ADMIN_ACCESSORIES_REQUEST,
  ADMIN_ACCESSORIES_SUCCESS,
  ALL_ACCESSORIES_FAIL,
  ALL_ACCESSORIES_REQUEST,
  ALL_ACCESSORIES_SUCCESS,
  CLEAR_ERRORS,
  DELETE_ACCESSORIES_FAIL,
  DELETE_ACCESSORIES_REQUEST,
  DELETE_ACCESSORIES_SUCCESS,
  NEW_ACCESSORIES_FAIL,
  NEW_ACCESSORIES_REQUEST,
  NEW_ACCESSORIES_SUCCESS,
  UPDATE_ACCESSORIES_FAIL,
  UPDATE_ACCESSORIES_RESET,
  UPDATE_ACCESSORIES_SUCCESS,
} from "../constants/accessoriesConstant";

// Get All Accessories from server
export const getAccessories =
  (currentPage = 1, category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_ACCESSORIES_REQUEST });

      let link = `/api/v1/accessories?&page=${currentPage}`;
      if (category) {
        link = `/api/v1/accessories?&page=${currentPage}&category=${category}`;
      }

      const { data } = await axios.get(link);

      dispatch({ type: ALL_ACCESSORIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ALL_ACCESSORIES_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Accessories for ADMIN
export const getAdminAccessories = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_ACCESSORIES_REQUEST });

    const { data } = await axios.get("/api/v1/admin/accessories");

    dispatch({ type: ADMIN_ACCESSORIES_SUCCESS, payload: data.accessories });
  } catch (error) {
    dispatch({
      type: ADMIN_ACCESSORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create NEW Accessories
export const createAccessories = (accessoriesData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ACCESSORIES_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/accessory/new`,
      accessoriesData,
      config
    );

    dispatch({
      type: NEW_ACCESSORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ACCESSORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Single Accessory Details
export const getAccessoryDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACCESSORIES_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/accessory/${id}`);

    dispatch({ type: ACCESSORIES_DETAILS_SUCCESS, payload: data.accessory });
  } catch (error) {
    dispatch({
      type: ACCESSORIES_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete An Accessory
export const deleteAccessory = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ACCESSORIES_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/accessory/${id}`);

    dispatch({
      type: DELETE_ACCESSORIES_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ACCESSORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Updating Existing Accessory
export const updateAccessory = (id, accessoryData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ACCESSORIES_RESET });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/accessory/${id}`,
      accessoryData,
      config
    );

    dispatch({
      type: UPDATE_ACCESSORIES_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_ACCESSORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
