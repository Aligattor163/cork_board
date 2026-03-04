import express from "express"
import cors from "cors"
import authRoute from "./routes/auth.routes"
import logger from "./middleware/logger.middleware"
import delay from "./middleware/delay.middleware"
import errorMiddleware from "./middleware/error.middleware"

const app = express()

app.use(cors())
app.use(express.json())

app.use(logger)
app.use(delay(300))

app.use("/api", authRoute)

app.use(errorMiddleware)

app.listen(3001, () => {
    console.log("Cork Board backend running on http://localhost:3001")
})
