import express  from "express";
import * as uploadImgController from "../controller/upImg"

const router = express.Router()
router.post('/upload-image', uploadImgController.uploadImage)

export default router