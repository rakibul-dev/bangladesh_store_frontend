import axios from "axios";
import {
  ADMIN_UNIT_FAIL,
  ADMIN_UNIT_REQUEST,
  ADMIN_UNIT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_UNIT_FAIL,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_SUCCESS,
  NEW_UNIT_FAIL,
  NEW_UNIT_REQUEST,
  NEW_UNIT_SUCCESS,
  UPDATE_UNIT_FAIL,
  UPDATE_UNIT_REQUEST,
  UPDATE_UNIT_SUCCESS,
} from "../constants/unitConstant";

// Get All Units from server
export const getUnits = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_UNIT_REQUEST });

    const { data } = await axios.get("/api/v1/admin/units");

    dispatch({ type: ADMIN_UNIT_SUCCESS, payload: data.units });
  } catch (error) {
    dispatch({
      type: ADMIN_UNIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create NEW Unit
export const createUnit = (unitData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_UNIT_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/admin/unit/new`,
      unitData,
      config
    );

    dispatch({
      type: NEW_UNIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_UNIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete An Unit
export const deleteUnit = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_UNIT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/unit/${id}`);

    dispatch({
      type: DELETE_UNIT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_UNIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Updating Existing Unit
export const updateUnit = (id, unitData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_UNIT_REQUEST });

    const config = {
      headers: { "Content-type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/admin/unit/${id}`,
      unitData,
      config
    );

    dispatch({
      type: UPDATE_UNIT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_UNIT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
