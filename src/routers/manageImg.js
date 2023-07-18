import express  from "express";
import * as imgManageController from "../controller/manageImg"

const router = express.Router()
router.get('/detail-user',imgManageController.detailUser)
router.get('/saveimage-user',imgManageController.saveImgUser)
router.get('/createimage-user',imgManageController.createImgUser)
router.delete('/deleteimage-user',imgManageController.deleteImgUser)



export default router