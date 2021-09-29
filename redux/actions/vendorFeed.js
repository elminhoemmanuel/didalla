import { GET_FEED_BOOSTERS, START_FETCH, STOP_FETCH, SET_ERROR,RESET_ERROR,
    GET_NOTIFS, NOTIF_VIEWED
} from "../types"
import axios from 'axios';
import Swal from 'sweetalert2'


//action to fetch all boosters
export const getFeedBoosters = (data) => (dispatch) => {

    dispatch({ type: START_FETCH })
    dispatch({ type: RESET_ERROR })

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

//action to fetch all boosters
export const getNotifs = (id, cb) => (dispatch) => {

    const userToken = localStorage.getItem('userToken');

    axios.get(`https://api.didalla.com/api/misc/get_notifications/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            console.log(response);
            dispatch({ type: GET_NOTIFS, payload: response.data.data });
            cb();
        }, (error) => {
            // console.log(error);
            cb();
            Swal.fire({
                icon: 'error',
                // iconColor:"#39B54A",
                title: 'Error Occured',
                confirmButtonColor:"#39B54A",
                text: 'Could not load notifications. Please refresh',
            })
        });

}

//action to fetch all boosters
export const markNotif = (id, cb) => (dispatch) => {

    const userToken = localStorage.getItem('userToken');

    axios.get(`https://api.didalla.com/api/misc/viewed_notification/${id}`,
        {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            // console.log(response);
            dispatch({ type:NOTIF_VIEWED })
            cb();
        }, (error) => {
            // console.log(error);
            cb();
            Swal.fire({
                icon: 'error',
                // iconColor:"#39B54A",
                title: 'Error Occured',
                confirmButtonColor:"#39B54A",
                text: 'Could not mark as read. try again',
            })
        });

}

