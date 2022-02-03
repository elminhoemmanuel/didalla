import { GET_COUNTRIES
} from "../types"
import axios from 'axios';
import Swal from 'sweetalert2'


//action to fetch all boosters
export const getCountries = (cb) => (dispatch) => {


    const userToken = localStorage.getItem('userToken');

    axios.get(`https://api.didalla.com/api/misc/countries`,
        {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            // console.log(response);
            dispatch({ type: GET_COUNTRIES, payload: response.data.data })
            cb();
            
        }, (error) => {
            // console.log(error);
            cb();
            Swal.fire({
                icon: 'error',
                // iconColor:"#39B54A",
                title: 'Error Occured',
                confirmButtonColor:"#39B54A",
                text: 'Could not load countries. Please refresh page',
            })
        });

}

//action to create campaign
export const createCampaign = (formdata,cb) => (dispatch) => {


    const userToken = localStorage.getItem('userToken');

    axios.post(`https://api.didalla.com/api/campaign/create`,formdata,
        {
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        }
    )
        .then((response) => {
            console.log(response);
            Swal.fire({
                icon: 'success',
                iconColor:"#39B54A",
                title: 'Campaign created',
                confirmButtonColor:"#39B54A",
                text: 'You have successfully created your campaign',
            })
            cb();
            
        }, (error) => {
            console.log(error);
            cb();
            Swal.fire({
                icon: 'error',
                // iconColor:"#39B54A",
                title: 'Error Occured',
                confirmButtonColor:"#39B54A",
                text: 'Something went wrong, please try again',
            })
        });

}

