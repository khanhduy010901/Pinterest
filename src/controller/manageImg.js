import * as manageImageService from "../sevices/manageImg"

const detailUser = async(req,res)=>{
    const nguoi_dung_id = req.body.nguoi_dung_id
    try {
        if( !nguoi_dung_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường '    
        })
        const response = await manageImageService.detailUserService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}

const saveImgUser = async(req,res)=>{
    const nguoi_dung_id = req.body.nguoi_dung_id
    try {
        if( !nguoi_dung_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường '    
        })
        const response = await manageImageService.saveImgUserService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}

const createImgUser = async(req,res)=>{
    const nguoi_dung_id = req.body.nguoi_dung_id
    try {
        if( !nguoi_dung_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu  trường '    
        })
        const response = await manageImageService.createImgUserService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}
const deleteImgUser = async(req,res)=>{
    const hinh_id = req.body.hinh_id
    try {
        if(!hinh_id) return res.status(400).json({
            err:1,
            msg:`Bạn nhập thiếu trường ` ,
        })
        const response = await manageImageService.deleteImgUserService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            err: error,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}

export{
    detailUser,
    saveImgUser,
    createImgUser,
    deleteImgUser
}