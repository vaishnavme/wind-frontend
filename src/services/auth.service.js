import axios from "axios";

export const logInUser = async({email, password}) => {
    const response = await axios.post(`/user/login`, {
            email, 
            password
    });
    return response;
}

export const signUpUser = async ({name, username, email, password}) => {
    const response = await axios.post(`/user/signup`, {
        name, username, email ,password
    })
    console.log(response)
    return response;
}