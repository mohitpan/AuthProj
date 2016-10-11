import axios from 'axios';

export function signupRequest(userdata) {
    return dispatch => {
        return axios.post('/user/register',userdata);
    }
}