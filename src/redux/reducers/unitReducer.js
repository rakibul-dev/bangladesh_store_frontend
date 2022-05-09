import {
  ADMIN_UNIT_FAIL,
  ADMIN_UNIT_REQUEST,
  ADMIN_UNIT_SUCCESS,
  CLEAR_ERRORS,
  DELETE_UNIT_FAIL,
  DELETE_UNIT_REQUEST,
  DELETE_UNIT_RESET,
  DELETE_UNIT_SUCCESS,
  NEW_UNIT_FAIL,
  NEW_UNIT_REQUEST,
  NEW_UNIT_RESET,
  NEW_UNIT_SUCCESS,
  UPDATE_UNIT_FAIL,
  UPDATE_UNIT_REQUEST,
  UPDATE_UNIT_RESET,
  UPDATE_UNIT_SUCCESS,
} from "../constants/unitConstant";

// Get All Units
export const unitsReducer = (state = { units: [] }, action) => {
  switch (action.type) {
    case ADMIN_UNIT_REQUEST:
      return {
        loading: true,
        units: [],
      };

    case ADMIN_UNIT_SUCCESS:
      return {
        loading: false,
        units: action.payload,
      };

    case ADMIN_UNIT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

// Create New Unit
export const newUnitReducer = (state = { unit: {} }, action) => {
  switch (action.type) {
    case NEW_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_UNIT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        unit: action.payload.unit,
      };
    case NEW_UNIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_UNIT_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Delete A Unit
export const deleteUnitReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_UNIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_UNIT_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Update An Unit
export const updateUnitReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_UNIT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_UNIT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_UNIT_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
