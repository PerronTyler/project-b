import express from 'express'
import "./server/config/mongoose.config.js";
import cors from 'cors'
import decksRouter from './server/routes/decks.routes.js'

// import playersRouter from './server/routes/players.routes'

const app = express();
const port = 8000
app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

const rootRouter = new express.Router()
rootRouter.use("/api/decks", decksRouter)


app.use(rootRouter)


app.listen(port, () => console.log(`The server is all fired up on port ${port}`));