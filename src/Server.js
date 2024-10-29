import express from"express"
import env from "dotenv"
import Cors from "cors"
import AuthRoute from "./Route/Auth/AuthRoute.js"
import RouteGetAllAuth from "./Route/GetAllAuth/RouteGetAllAuth.js"
import RoutePost from "./Route/Post/RoutePots.js"

const app = express()
env.config()
const PORT = process.env.PORT


app.use(Cors())

app.use(express.json({
    limit : "100mb"
}))

app.use(express.urlencoded({
    extended : true
}))

app.use(AuthRoute)
app.use(RouteGetAllAuth)
app.use(RoutePost)

app.listen(PORT, () => console.info(`
    ==============
    SERVER RUN ${PORT}
    ==============
    `))