import db from "../models"


const editUserService =({nguoi_dung_id, email, mat_khau, ho_ten, tuoi, anh_dai_dien})=> new Promise(async (resolve, reject) => {
    try {
        const response = await db.nguoi_dung.update({
            nguoi_dung_id,
            email,
            mat_khau,
            ho_ten,
            tuoi,
            anh_dai_dien
        },{
            where: {nguoi_dung_id}
        })
        resolve({
            err: response[0] > 0 ? 0 :1,
            msg: response[0] >0 ? `${response[0]} book updated ` : `Sửa không thành công`,
            response
        })

    } catch (error) {
        reject(error)
    }
})

export {
    editUserService
}