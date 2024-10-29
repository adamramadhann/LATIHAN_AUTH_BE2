import jwt from "jsonwebtoken";
import { request, response } from "express";

const authenticationToken = (req = request, res = response, next) => {
    const authHeaders = req.headers['authorization'];


    if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Bearer is not found" });
    }

   
    const token = authHeaders.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied!!" });
    }

    

    jwt.verify(token, process.env.JWT_SCREEN, (error, data) => {
        if (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(403).json({ message: "Token has expired" });
            }

            return res.status(403).json({ message: "Token denied" });
        }

        
        req.userId = data.userId;
        next();
    });
};

export default authenticationToken;
