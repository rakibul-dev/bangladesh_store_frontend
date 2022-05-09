import { TEST_ACTION_TYPE } from "../constants/TestActionType";

export const testReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case TEST_ACTION_TYPE:
      return {
        loading: true,
        products: [action.payload],
      };

    default:
      return state;
  }
};
