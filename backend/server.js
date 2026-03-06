const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")

const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/tasks",taskRoutes)

app.listen(5000,()=>{
 console.log("Server running on port 5000")
})