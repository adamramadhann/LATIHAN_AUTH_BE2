import { request, response } from "express"
import db from "../../Conn.js"

const UpdatePost = async (req = request, res = response) => {
    const { judul, description } = req.body
    const { id } = req.params
    const idInt = parseInt(id)
    const userId = req.userId
    try {
        const getPost = await db.post.findUnique({
            where : {
                id : idInt
            }
        })
        if(!getPost) {
            return res.status(500).json({message : "id harus integer"})
        }
        const updatePots = await db.post.update({
            where : {
                id : idInt,
                userId : userId
            } ,
            data : {
                judul, description
            }
        })

        console.info({judul, description})
        res.status(201).json({ message : "up to date succes", updatePots})
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "data not up to date"})
    }
}

export default UpdatePost