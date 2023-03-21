import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import router from "./router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 7777;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

(() => {
    router(app);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(`Failed to connect to MongoDB ${err}`));
    app.listen(port, () => {
        console.log(`App is listening on port ${port}`);
    })
})()