import express  from "express";
import * as editUserController from "../controller/edit"

const router = express.Router()
router.put('/edit-user', editUserController.editUser)

export default router