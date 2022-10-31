import { Request, Response, Router } from 'express'

import { User } from '../models/user'
import { getAll, findOne, create } from '../services/user'

const router = Router()

class UserDto {
  private id: number
  private email: string
  private name: string

  constructor(data: User) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
  }
}

router.get('', async (req: Request, res: Response) => {
  const users = await getAll()
  res.json(users.map(user => new UserDto(user)))
})

router.post('', (req: Request, res: Response) => {
  // Code goes here
})

router.get('/:id', (req: Request, res: Response) => {
  // Code goes here
})

export default router
