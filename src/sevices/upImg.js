import db from "../models"


const uploadImageService =({nguoi_dung_id, ten_hinh, duong_dan, mo_ta})=> new Promise(async (resolve, reject) => {
    try {
        const response = await db.hinh_anh.create({
                nguoi_dung_id,
                ten_hinh,
                duong_dan,
                mo_ta
        })
        resolve({
            err: response ? 0 :2,
            msg: response ? 'Đăng ảnh thành công !' : 'Đăng ảnh không thành công',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export {
    uploadImageService
}