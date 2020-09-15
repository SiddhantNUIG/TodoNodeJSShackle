import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import testRouter from "./route";
const App = express();

Mongoose.connect("mongodb+srv://cluster0.vinxm.mongodb.net/<dbname>?retryWrites=true&w=majority",
    { auth: { user: "test", password: "test" }, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 }).then(
        () => { console.log("Database connected") }
    )

App.use(bodyParser.json({ limit: "50mb", extended: true }));
App.use("/", testRouter)


//App.listen(18320, () => console.log("server listening on 5000"));