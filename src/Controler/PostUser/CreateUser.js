import { request, response } from "express";
import db from "../../Conn.js";

const CreateUserPost = async (req = request, res = response) => {
    const { judul, description } = req.body;
    const userId = req.userId;

    console.info(judul, description)

    try {
        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
        });

        if (!user) {
            return res.status(403).json({ message: "User not found", user });
        }


        const createPost = await db.post.create({
            data: {
                judul,
                description,
                author: user.name,
                userId: user.id,  
            },
        });

        res.status(201).json({ message: "Data successfully created", createPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred", error });
    }
};

export default CreateUserPost;
