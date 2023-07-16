import authRouter from './auth'
import homeRouter from './home'
import detailPageRouter from './detailPage'

const initRouters = (app)=>{
    app.use('/api/v1/auth', authRouter),
    app.use('/api/v1/home', homeRouter),
    app.use('/api/v1/detail-page', detailPageRouter)

    return app.use('/', (req,res)=>{
        res.send('helo')
    })
}

export default initRouters