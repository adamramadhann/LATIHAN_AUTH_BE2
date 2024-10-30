import { Router } from "express";
import CreateUserPost from "../../Controler/PostUser/CreateUser.js";
import authenticationToken from "../../Midlewer/authenticationToken.js";
import GetAllPost from "../../Controler/PostUser/GetallPost.js";
import DeletePost from "../../Controler/PostUser/DeletedPost.js";
import UpdatePost from "../../Controler/PostUser/UpdatePost.js";
import PostByAuth from "../../Controler/PostUser/PostByOuth.js";

const RoutePost = Router()
RoutePost.post("/api/post/crete",authenticationToken, CreateUserPost )
RoutePost.get("/api/post/getAll", GetAllPost )
RoutePost.delete("/api/post/delete/:id",authenticationToken, DeletePost )
RoutePost.put("/api/post/update/:id",authenticationToken, UpdatePost )
RoutePost.get("/api/post/getAllByAuth",authenticationToken, PostByAuth )

export default RoutePost