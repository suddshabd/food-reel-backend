import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import foodRoutes from "./routes/food.routes.js";

const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // to parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: true })); // to parse incoming requests with urlencoded payloads
app.use(cookieParser()); // to parse cookies

// routes
app.use("/api/users", userRoutes);
app.use("/api/food", foodRoutes);

export default app;