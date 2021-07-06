import axios from "axios";

export const logInUser = async({email, password}) => {
    try {
        const response = await axios.post(`/user/login`, {
            email, password
        })
        return response
    } catch (err) {
        console.log(err);
    }
}

export const signUpUser = async({name, username, email, password}) => {
    try {
        const response = await axios.post(`/user/signup`, {
            name, username, email, password
        })
        return response
    } catch(err) {
        console.log(err)
    }
}