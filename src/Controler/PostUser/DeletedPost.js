import { request, response } from "express";
import db from "../../Conn.js";

const DeletePost = async (req = request, res = response) => {
    const { id } = req.params
    try {
        const deletePost = await db.post.delete({
            where : {
                id : parseInt(id)
            }
        })
        res.status(201).json({message : "data berhasil di hapus", deletePost})
    } catch (error) {
        console.info(error)
        res.status(500).json({message : "deleted not succes"})
    }
}

export default DeletePost