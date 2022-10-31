import { User } from '../models/user'

const users: User[] = [
  {
    id: 1000,
    name: 'grootthepianist',
    email: 'email@domain.com',
    password: 'password',
    token: 'eyJ1c2VyIjoiam9obmR1ZSIsImlkIjoxNTE2MjM5MDIyfQ',
  },
  { id: 1001, name: 'ranneocitylights', email: 'ranneocitylights@domain.com', password: 'password', token: '' },
  { id: 1002, name: 'gladiatormemento', email: 'gladiatormemento@domain.com', password: 'password', token: '' },
  { id: 1003, name: 'toystoryinsideout', email: 'toystoryinsideout@domain.com', password: 'password', token: '' },
  { id: 1004, name: 'casinoallabouteve', email: 'casinoallabouteve@domain.com', password: 'password', token: '' },
  { id: 1005, name: 'neoragingbullolaf', email: 'neoragingbullolaf@domain.com', password: 'password', token: '' },
  { id: 1006, name: 'platoonranbatman', email: 'platoonranbatman@domain.com', password: 'password', token: '' },
  { id: 1007, name: 'downfallgromitneo', email: 'downfallgromitneo@domain.com', password: 'password', token: '' },
  { id: 1008, name: 'heattaxidriverred', email: 'heattaxidriverred@domain.com', password: 'password', token: '' },
  { id: 1009, name: 'ironmanranbatman', email: 'ironmanranbatman@domain.com', password: 'password', token: '' },
]

export const getAll = (): Promise<User[]> => new Promise(resolve => resolve(users))
export const findOne = (id: string): Promise<User> =>
  new Promise(resolve => resolve(users.find(user => user.id === parseInt(id, 10))))
export const findUserByEmail = (email: string): Promise<User> =>
  new Promise(resolve => resolve(users.find(user => user.email === email)))
export const create = (name: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    const exist = !!users.find(user => user.name === name)
    if (exist) return reject('Already exist!')

    const user = new User()
    user.id = ++users[users.length - 1].id
    user.name = name

    users.push(user)
    resolve(user)
  })
}
export const isTokenValid = (token: string) => !!users.find(user => user.token === token)
