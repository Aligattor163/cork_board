import {Router} from "express"
import logger from "../middleware/logger.middleware";
import Routes from "@shared/Routes";
import auth from "../middleware/auth.middleware";
import {stickers} from "../data/stickers.mock";

const stickerRoutes = Router()

stickerRoutes.get("/", logger, auth, (req, res) => {
    console.log("Getting stickers")
    stickers ? res.json(stickers).status(200) : res.sendStatus(404);
})

export default stickerRoutes
