import axios from 'axios'
export const BASE_URL = 'https://api-cookenu.onrender.com'

export const Login = async (body) => {
    
    const { data }  = await axios.post(`${BASE_URL}/user/login`, body)
    return data
}
export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/user/signup`, body)
    return data
}
export const validateEmail = email => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
export const validatePassword = password => /.{6,}/.test(password)
export const validateName = name => /.{2,}/.test(name);
