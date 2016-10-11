import axios from 'axios';

export function LoginRequest(userdata) {
    return dispatch => {
        return axios.post('/user/login',userdata);
    }
}