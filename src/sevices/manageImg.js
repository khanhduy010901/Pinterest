import db from "../models"

const detailUserService =({nguoi_dung_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.nguoi_dung.findOne({
            where :{nguoi_dung_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được thông tin người dùng lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const saveImgUserService =({nguoi_dung_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.luu_anh.findAll({
            where :{nguoi_dung_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được thông tin người dùng lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const createImgUserService =({nguoi_dung_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.hinh_anh.findAll({
            where :{nguoi_dung_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được thông tin người dùng lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

export{
    detailUserService,
    saveImgUserService,
    createImgUserService
}