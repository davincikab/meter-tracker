import axios from 'axios';
const API_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDvFGpCB1w-VNTnopo1qzxMVQij-09fwBg';
const userInfo = {
    "email": "super@test.com",
    "password": "123456",
    "returnSecureToken": true
}

class AuthService {
    login(email=userInfo.email, password=userInfo.password) {
        console.log(email);
        
        return axios.post(`${API_URL}`, {
            email,
            password,
            "returnSecureToken": true
        })
        .then(response => {
            console.log(response);

            if (response.data.idToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
              }

              return response.data;
        });

    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(`${API_URL}/register`, {
            username,
            email,
            password
        });

    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }
}


export default new AuthService();