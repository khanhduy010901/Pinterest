import db from "../models"
import * as homeService from "../sevices/home"

const getImages = async(req,res)=>{
    try {
        const response = await homeService.imagesService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
}

 const searchImage = async(req,res)=>{
    const ten_hinh = req.body.ten_hinh
    try {
        if( !ten_hinh) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await homeService.searchService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg:'Lỗi từ phía controller: ', error
        })
    }
} 

export{
    getImages,
    searchImage
}