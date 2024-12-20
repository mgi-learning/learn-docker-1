import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'
import bodyParser from 'body-parser'
import * as dotenv from 'dotenv';

const app: Express = express()

dotenv.config();

const PORT: string | number = process.env.PORT || 4000

app.use(bodyParser())
app.use(cors())
app.use(todoRoutes)

// replace the host "cluster0.xo006.mongodb.net" with the address of your host generated in MongoDB Atlas.
// https://docs.mongodb.com/manual/reference/connection-string/
const uri: string = process.env.MONGO_URI || 'mongodb://root:password@localhost:27017/todo?authSource=admin'

console.log(`Message Welcome: ${process.env.WELCOME_MESSAGE}`);

const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
.connect(uri, options)
.then(() =>
    app.listen(PORT, () =>
        console.log(`Server running on http://localhost:${PORT}`)
    )
)
.catch((error) => {
    throw error
})