import {request, response} from "express"
import db from "../../Conn.js"

const getAllAuth = async(req = request, res = response) => {
    try {
        const data = await db.user.findMany()
        res.status(201).json({message : "Data All Ready", data})
    } catch (error) {
        console.error(error)
        res.status(500).json({message : "data undifend", error})
    }
}

export default getAllAuth