import { Router } from "express";
import Register from "../../Controler/Auth/Register.js";
import Login from "../../Controler/Auth/Login.js";


const AuthRoute = Router()

AuthRoute.post("/api/user/register", Register)
AuthRoute.post("/api/user/login", Login)

export default AuthRoute