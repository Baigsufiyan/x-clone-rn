import express from "express"
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();
connectDB();

app.get("/", (req, res) => res.send("Hello from server!"));

app.listen(ENV.PORT,() => console.log("server is up and running on PORT:",ENV.PORT)); 