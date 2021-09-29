import { GET_COUNTRIES, START_FETCH, STOP_FETCH, SET_ERROR, RESET_ERROR
} 

from "../types"
import axios from 'axios';


//action to fetch all boosters
export const getCountries = () => (dispatch) => {

    dispatch({ type: START_FETCH })
    dispatch({ type: RESET_ERROR })

    const userToken = localStorage.getItem('userToken');

    axios.get(`https://api.didalla.com/api/misc/countries`)
        .then((response) => {
            // console.log(response);
            dispatch({ type: GET_COUNTRIES, payload: response.data.data })
            dispatch({ type: STOP_FETCH })
        }, (error) => {
            // console.log(error);
            dispatch({ type: SET_ERROR })
            dispatch({ type: STOP_FETCH })
        });

}

