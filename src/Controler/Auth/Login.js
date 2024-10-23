import {request, response} from "express"
import JWT from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import db from "../../Conn.js"

const Login = async (req = request, res = response) => {
    const {email, password} = req.body
    try {
        const emailLower = email.toLowerCase()
        const dataApi = await db.user.findUnique({
             where : {
                email : emailLower,
            }
        })

        const falidatePassword = await bcryptjs.compare(password, dataApi.password)
        

        const token = JWT.sign({userId : dataApi.id}, process.env.JWT_SCREEN, {
            expiresIn : '3d'
        })

        res.status(200).json({message : "Login Succes", falidatePassword, token})
        

    } catch (error) {
        console.error(error)
    }
}

export default Login