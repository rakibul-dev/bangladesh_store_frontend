import axios from 'axios'
import { TEST_ACTION_TYPE } from '../constants/TestActionType'

export const getUnits = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://bangladesh-store.vercel.app/api/v1/products`,
    )

    dispatch({ type: TEST_ACTION_TYPE, payload: data.units })
  } catch (error) {
    console.log(error)
  }
}
