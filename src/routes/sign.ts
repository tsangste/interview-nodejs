import { Request, Response, Router } from 'express'

import { findUserByEmail } from '../services/user'

const router = Router()

router.post('', async (req: Request, res: Response) => {
  // Code goes here
})

router.delete('', async (req: Request, res: Response) => {
  // Code goes here
})

export default router
