import { LOGIN } from "../types"

//action to LOGIN
export const login = (data) => (dispatch) => {
    dispatch({ type: LOGIN, payload:data })
}