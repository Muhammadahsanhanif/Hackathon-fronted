
const devUrl = "http://localhost:4000/"
const prodURL ="https://hackathone-backend-yaid.vercel.app/"

export const BASE_URL = prodURL


export const appRoutes = {
login : BASE_URL + "auth/login",
register : BASE_URL + "auth/register",
myinfo : BASE_URL + "auth/myinfo",
forgetpassword : BASE_URL + "auth/forgetpassword"
}