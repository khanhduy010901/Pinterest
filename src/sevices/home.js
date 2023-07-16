import db from "../models"

const imagesService =()=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.hinh_anh.findAll({
            raw: true
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được ảnh',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const searchService =({ten_hinh})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.hinh_anh.findOne({
            where :{ten_hinh},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được ảnh lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

export {
    imagesService,
    searchService
}