import db from "../models"

const detailImageService =({hinh_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.hinh_anh.findOne({
            where :{hinh_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được thông tin ảnh lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const commentImageService =({hinh_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.binh_luan.findOne({
            where :{hinh_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Không lấy được thông tin bình luận của ảnh lêu lêu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const getSaveService =({hinh_id})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.luu_anh.findOne({
            where :{hinh_id},
            raw:true,
        })
        resolve({
            err : response ? 0 : 2,
            msg : response ? 'OK' : 'Hình này chưa được lưu',
            response 
        })
    } catch (error) {
        reject(error)
    }
})

const saveCommentService =({binh_luan_id, nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung})=> new Promise(async (resolve, reject) => {
    try {
        const response = await db.binh_luan.create({
                binh_luan_id,
                nguoi_dung_id,
                hinh_id,
                ngay_binh_luan,
                noi_dung

        })
        resolve({
            err: response ? 0 :2,
            msg: response ? 'Comment thành công !' : 'Comment không thành công',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export{
    detailImageService,
    commentImageService,
    getSaveService,
    saveCommentService
}
