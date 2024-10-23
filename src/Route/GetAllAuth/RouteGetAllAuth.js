import { Router } from "express";
import getAllAuth from "../../Controler/GetAll/GetAllAuth.js";

const RouteGetAllAuth = Router()

RouteGetAllAuth.get("/api/user/getAll", getAllAuth)

export default RouteGetAllAuth