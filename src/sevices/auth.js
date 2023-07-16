import db from "../models"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { v4 } from "uuid"
require('dotenv').config()

const hashPassword = mat_khau => bcrypt.hashSync(mat_khau, bcrypt.genSaltSync(12))

const registerService =({email, ho_ten, mat_khau})=> new Promise(async (resolve, reject) => {
    try {
        const response = await db.nguoi_dung.findOrCreate({
            where :{email},
            defaults:{
                email,
                ho_ten,
                mat_khau: hashPassword(mat_khau),
                id: v4()
            }
        })
        const token = response[1] && jwt.sign({id: response[0].id, email: response[0].email}, process.env.SECRET_KEY, {expiresIn:'2d'})
        resolve({
            err: token ? 0 :2,
            msg: token ? 'Đăng kí tài khoản thành công !' : 'Tài khoản này đã tồn tại',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})

const loginService =({email, mat_khau})=> new Promise(async (resolve, reject) => {
    try {
        const response = await db.nguoi_dung.findOne({
            where :{email},
            raw:true,
            }
        )
        const isCorrectPassword = response && bcrypt.compareSync(mat_khau, response.mat_khau)
        const token = isCorrectPassword && jwt.sign({id: response.id, email: response.email}, process.env.SECRET_KEY, {expiresIn:'2d'})
        resolve({
            err: token ? 0 :2,
            msg: token ? 'Đăng nhập thành công !' : response ? 'Mật khẩu sai, vui lòng nhập lại!': 'Tài khoản không đúng!',
            token: token || null
        })

    } catch (error) {
        reject(error)
    }
})

export {
    registerService,
    loginService
}