const Router = require('express')
const router = new Router()

const messageRouter = require('./messageRouter')
const modelRouter = require('./modelRouter')
const orderRouter = require('./orderRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')

router.use('/user',userRouter)
router.use('/type',typeRouter)
router.use('/model',modelRouter)
router.use('/order',orderRouter)
router.use('/message',messageRouter)


module.exports = router