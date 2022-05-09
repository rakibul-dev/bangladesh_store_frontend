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
  DELETE_ACCESSORIES_RESET,
  DELETE_ACCESSORIES_SUCCESS,
  NEW_ACCESSORIES_FAIL,
  NEW_ACCESSORIES_REQUEST,
  NEW_ACCESSORIES_RESET,
  NEW_ACCESSORIES_SUCCESS,
  UPDATE_ACCESSORIES_FAIL,
  UPDATE_ACCESSORIES_REQUEST,
  UPDATE_ACCESSORIES_RESET,
  UPDATE_ACCESSORIES_SUCCESS,
} from "../constants/accessoriesConstant";

// Get All Accessories
export const accessoryReducer = (state = { accessories: [] }, action) => {
  switch (action.type) {
    case ALL_ACCESSORIES_REQUEST:
    case ADMIN_ACCESSORIES_REQUEST:
      return {
        loading: true,
        accessories: [],
      };

    case ALL_ACCESSORIES_SUCCESS:
      return {
        loading: false,
        accessories: action.payload.accessories,
        accessoriesCount: action.payload.accessories,
        resultPerPage: action.payload.resultPerPage,
      };

    case ADMIN_ACCESSORIES_SUCCESS:
      return {
        loading: false,
        accessories: action.payload,
      };

    case ALL_ACCESSORIES_FAIL:
    case ADMIN_ACCESSORIES_FAIL:
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

// Accessories Details Reducer
export const accessoriesDetailsReducer = (
  state = { accessory: {} },
  action
) => {
  switch (action.type) {
    case ACCESSORIES_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case ACCESSORIES_DETAILS_SUCCESS:
      return {
        loading: false,
        accessory: action.payload,
      };

    case ACCESSORIES_DETAILS_FAIL:
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

// New Accessory
export const newAccessoryReducer = (state = { accessory: {} }, action) => {
  switch (action.type) {
    case NEW_ACCESSORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_ACCESSORIES_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        accessory: action.payload.accessory,
      };
    case NEW_ACCESSORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_ACCESSORIES_RESET:
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

// Delete A Accessory
export const deleteAccessoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ACCESSORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ACCESSORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };

    case DELETE_ACCESSORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_ACCESSORIES_RESET:
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
// Update An Accessory
export const updateAccessoryReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ACCESSORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_ACCESSORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };

    case UPDATE_ACCESSORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case UPDATE_ACCESSORIES_RESET:
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
