    import {  request, response } from "express";
    import db from "../../Conn.js";

    const GetAllPost = async ( req = request, res = response ) => {
        try {
            const apiGetAll = await db.post.findMany({
                orderBy : { createAt :  "desc"}
            })
            res.status(201).json({message : "succes get all data", apiGetAll})
        } catch (error) {
            console.error(error)
            res.status(404).json(error)
        }
    }
    
    export default GetAllPost