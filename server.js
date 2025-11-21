import app from "./src/app.js";
import dotenv from "dotenv"
import connectDB from "./src/db/db.js";

// Load environment variables only in local development
if (process.env.NODE_ENV !== 'production') {
    dotenv.config({
        path: './.env'
    });
}

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;

