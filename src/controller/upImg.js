import * as uploadImgService from "../sevices/upImg"


const uploadImage = async(req,res)=>{
    const {nguoi_dung_id, ten_hinh, duong_dan, mo_ta} = req.body
    try {
        if( !nguoi_dung_id || !ten_hinh || !duong_dan || !mo_ta) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await uploadImgService.uploadImageService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Lỗi ở uploadImgController' + error
        })
    }
}

export {
    uploadImage
}