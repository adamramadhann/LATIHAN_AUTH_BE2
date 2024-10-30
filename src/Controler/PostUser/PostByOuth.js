import { request, response } from "express";
import db from "../../Conn.js";

const PostByAuth = async (req = request, res = response) => {
    const userId = req.userId
    try {
        const dataUserByPost = await db.post.findMany({
            where : { userId }
        })
        
        res.status(201).json({message : "data Al Ready", dataUserByPost})

    } catch (error) {
        console.info(error)
    }
}

export default PostByAuth
