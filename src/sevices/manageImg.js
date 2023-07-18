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
            msg : response ? 'OK' : 'Không lấy được ảnh đã lưu lêu lêu',
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
            msg : response ? 'OK' : 'Không lấy được ảnh đã tạo lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const deleteImgUserService =({hinh_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.hinh_anh.destroy({
            where :{hinh_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'Ảnh đã được xóa' : 'Không xóa được ảnh rồi lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})


export{
    detailUserService,
    saveImgUserService,
    createImgUserService,
    deleteImgUserService
}