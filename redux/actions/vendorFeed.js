import { GET_FEED_BOOSTERS,  START_FETCH, STOP_FETCH, SET_ERROR, SET_SORTER } from "../types"
import axios from 'axios';


//action to fetch all boosters
export const getFeedBoosters = (data) => (dispatch) => {

    dispatch({ type: START_FETCH })

    const userToken = localStorage.getItem('userToken');

    axios.get(`https://api.didalla.com/api/booster?network=${data.platform}&budget=${data.budget}&location=${data.location}&topic=${data.topic}`,
        {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }
    )
    .then((response) => {
        // console.log(response);
        dispatch({ type: GET_FEED_BOOSTERS, payload: response.data.data })
        dispatch({ type: STOP_FETCH })
    }, (error) => {
        // console.log(error);
        dispatch({ type: SET_ERROR })
        dispatch({ type: STOP_FETCH })
    });

}

//action to fset sorter
export const setSorter = ( data ) => (dispatch) => {

    dispatch({ 
        type: SET_SORTER,
        payload:data,
    })
    
}