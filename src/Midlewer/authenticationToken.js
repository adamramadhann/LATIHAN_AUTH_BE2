import jwt from "jsonwebtoken"
import {request, response} from "express"

const authenticationToken = (req = request, res = response, next) => {
    const  authHeaders = req.headers['authentication'] 

    if(!authHeaders || authHeaders !== "Beare ") {
        return res.status(401).json({message : "bearer is not found"})
    }

    const token =  authHeaders.split(' ')[1];

    if(!token) {
        return res.status(401).json({messgae : "acces denied !!"})
    }

    jwt.sign(token, process.env.JWT_SCREEN, (error, data) => {
        if(error) {

            if(error.name === "TokenExpiredError") {
                return res.status(403).json({messgae : "data error ni broo"})
            }
            
            return res.status(403).json({message : "token denied"})
        }

    jwt.decode()

        req.userId = data.userId
            next() 
        })
}

export default authenticationToken