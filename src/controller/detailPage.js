import * as detailPageService from "../sevices/detailPage"

const detailImage = async(req,res)=>{
    const hinh_id = req.body.hinh_id
    try {
        if( !hinh_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await detailPageService.detailImageService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}
const commentImage = async(req,res)=>{
    const hinh_id = req.body.hinh_id
    try {
        if( !hinh_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await detailPageService.commentImageService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}
const getSaveImage = async(req,res)=>{
    const hinh_id = req.body.hinh_id
    try {
        if( !hinh_id) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await detailPageService.getSaveService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}

const saveComment = async(req,res)=>{
    const {binh_luan_id, nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung} = req.body
    try {
        if( !binh_luan_id || !nguoi_dung_id || !hinh_id || !ngay_binh_luan || !noi_dung ) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await detailPageService.saveCommentService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Lỗi từ phía controller:' + error
        })
    }
}

export{
    detailImage,
    commentImage,
    getSaveImage,
    saveComment
}