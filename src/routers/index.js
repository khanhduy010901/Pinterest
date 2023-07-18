import authRouter from './auth'
import homeRouter from './home'
import detailPageRouter from './detailPage'
import manageImgRouter from './manageImg'
import postImgRouter from './upImg'

const initRouters = (app)=>{
    app.use('/api/v1/auth', authRouter),
    app.use('/api/v1/home', homeRouter),
    app.use('/api/v1/detail-page', detailPageRouter),
    app.use('/api/v1/manage-image', manageImgRouter),
    app.use('/api/v1/post-image', postImgRouter)

    return app.use('/', (req,res)=>{
        res.send('helo')
    })
}

export default initRouters