import axios from "axios";


export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"

export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE"

export const SIGNUP_REQUEST = "SIGNUP_REQUEST"

export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"

export const SIGNUP_FAILURE = "SIGNUP_FAILURE"

export const LOGOUT_REQUEST = "LOGOUT_REQUEST"

export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const LOGIN_FAILURE = "LOGIN_FAILURE"


export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const signUpRequest = () => ({
    type: SIGNUP_REQUEST
})

export const signUpSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    payload: data
})

export const signUpFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error
})

export const logOutRequest = () => ({
    type: LOGOUT_REQUEST
})


export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    };
};


export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
};

    export const fetchData = () => {
        return (dispatch) => {
            dispatch(fetchDataRequest())
            axios.get("http://localhost:8000/user/findAll")
                .then(response => {
                    const data = response.data
                    console.log(data)
                    dispatch(fetchDataSuccess(data))
                })
                .catch(error => {
                    dispatch(fetchDataFailure(error))
                })
        }
    }

    export const signUp = (requestBody) => {
        return (dispatch) => {
            dispatch(signUpRequest())
            axios.post("http://localhost:8000/user/registration", requestBody)
                .then(response => {
                    const data = response.data
                    console.log(data)
                    dispatch(signUpSuccess(data))
                })
                .catch(error => {
                    dispatch(signUpFailure(error))
                })
        }
    }

   export const login = (requestBody) => {
        return async (dispatch) => {
            try {
                const response = await axios.post("http://localhost:8000/user/login", requestBody);
                console.log(response)

                if (response.status === 200) {

                    dispatch(loginSuccess(response.data));
                } else {

                    dispatch(loginFailure("Invalid email or password"));
                }
            } catch (error) {
                console.log(error)
                dispatch(loginFailure("An error occurred during login"));
            }
        };
    };