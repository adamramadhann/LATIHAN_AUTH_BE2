import { request, response } from "express";
import db from "../../Conn";

const CreateData = async (req =request, res = response) => {
    const {judul,  description} = req.body
    const userId = req.userId

    try {
        const User =  await db.user.findUnique({
            where : {
                id : userId
            }
        })


        if(!User) {
            return res.status(403).json({messagee : "user notFound ", User})
        }

    
        const createPost = await db.post.create({
            data : {
                judul,
                description,
                author : User.name
            }
        })

        res.status(201).json({messagee : "data successfull crate", createPost})


    } catch (error) {
        console.error(error)
    }

}

export default CreateData