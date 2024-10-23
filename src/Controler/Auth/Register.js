import {request, response} from "express"
import bcryptjs from "bcryptjs"
import db from "../../Conn.js"

const Register = async (req = request, res = response) => {
    const {name, email, password } = req.body
    console.info(name, email, password)
    try {
        const emailLower = email.toLowerCase()
        const passwordHash = await bcryptjs.hash(password, 10)
        const dataApi = await db.user.create({
            data : {
                name,
                email : emailLower,
                password : passwordHash
            }
        })
        res.status(200).json({message : "register suscces", dataApi})
    } catch (error) {
        console.error(error)
    }
}

export default Register