import * as authService from "../sevices/auth"

const register = async(req,res)=>{
    const {email, mat_khau, ho_ten} = req.body
    try {
        if( !email || !mat_khau || !ho_ten) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Lỗi ở authController' + error
        })
    }
}

const login = async(req,res)=>{
    const {email, mat_khau} = req.body
    try {
        if( !email || !mat_khau) return res.status(400).json({
            err:1,
            msg:'Bạn nhập thiếu trường'    
        })
        const response = await authService.loginService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Lỗi ở authController' + error
        })
    }
}

export {
    register,
    login
}