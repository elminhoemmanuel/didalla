import { TEST } from "../types"

//action to test
export const test = () => (dispatch) => {
    dispatch({ type: TEST })
}