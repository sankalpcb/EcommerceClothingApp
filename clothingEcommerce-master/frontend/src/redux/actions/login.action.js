//type of action
export const LOGIN_USER = "LOGIN_USER" 

//action
export const loginUser = (loginData) => (
    {
        type : LOGIN_USER,
        payload : loginData  

    }
)

