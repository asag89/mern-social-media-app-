
import express from "express"
import dotenv from "dotenv"

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config()
const app = express()

import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';

// error handling package
import "express-async-errors"

import connectDB from "./db/connect.js"

// routers
import userRouter from "./routes/userRouter.js"
import postRouter from "./routes/postRouter.js"
import commentRouter from "./routes/commentRouter.js"
import activityRouter from "./routes/activityRouter.js"

//middleware
import errorHandlerMiddleware from "./middleware/errorHandler.js"
import notFoundMiddleware from "./middleware/notFound.js"

const __dirname = dirname(fileURLToPath(import.meta.url));
// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json())

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());


// middleware
app.use("/api/users", userRouter)
app.use("/api/posts", postRouter)
app.use("/api/comments", commentRouter)
app.use("/api/activity", activityRouter)

// only when ready to deploy
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...\nconnected to db`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()