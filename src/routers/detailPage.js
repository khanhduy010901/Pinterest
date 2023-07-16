import express  from "express";
import * as detailPageController from "../controller/detailPage"

const router = express.Router()
router.get('/detail-image', detailPageController.detailImage),
router.get('/comment',detailPageController.commentImage)



export default router