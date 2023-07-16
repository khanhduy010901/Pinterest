import express  from "express";
import * as homeController from "../controller/home"

const router = express.Router()
router.get('/images', homeController.getImages)
router.get('/search-image', homeController.searchImage)

export default router