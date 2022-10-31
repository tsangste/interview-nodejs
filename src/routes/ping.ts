import { Request, Response, Router } from 'express'

const router = Router()

router.get('', async (req: Request, res: Response) => {
  res.json({ code: 'pong' })
})

export default router
