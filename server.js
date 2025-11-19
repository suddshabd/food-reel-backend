import app from "./src/app.js";
import dotenv from "dotenv"
import connectDB from "./src/db/db.js";
dotenv.config({
    path: './.env'
})
connectDB();

export default app;