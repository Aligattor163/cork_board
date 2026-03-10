import {Router} from "express"
import logger from "../middleware/logger.middleware";
import auth from "../middleware/auth.middleware";
import {stickers} from "../data/stickers.mock";
import {Sticker} from "@shared/types/AppTypes";
import Routes from "@shared/Routes";

const stickerRoutes = Router()

stickerRoutes.get(Routes.stickers, logger, auth, (req, res) => {
    console.log("Getting stickers")
    stickers ? res.json(stickers).status(200) : res.sendStatus(404);
})

stickerRoutes.post(Routes.createSticker, logger, auth, (req, res) => {
    console.log("Creating sticker")
    const newSticker: Sticker = req.body as Sticker;
    try {
        stickers.push(newSticker);
        res.sendStatus(200);
    } catch (err) {
        res.json(err).status(500);
    }
})

export default stickerRoutes
