import * as editService from "../sevices/edit"


const editUser = async(req,res)=>{
    const {nguoi_dung_id, email, mat_khau, ho_ten, tuoi, anh_dai_dien} = req.body
    try {
        if( !nguoi_dung_id || !email || !mat_khau || !ho_ten ||!tuoi ||!anh_dai_dien) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await editService.editUserService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Lỗi ở editImgController' + error
        })
    }
}

export {
    editUser
}