import { Router } from 'express'

import userRoutes from './user'
import pingRoutes from './ping'
import signRoutes from './sign'

const router = Router()

router.use('/users', userRoutes)
router.use('/ping', pingRoutes)
router.use('/sign', signRoutes)

export default router
