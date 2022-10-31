import express from 'express'
import session from 'express-session'

import routes from './routes'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('trust proxy', 1)
app.use(
  session({
    secret: 'keyboard',
    resave: true,
    saveUninitialized: true,
  })
)

app.use('/api', routes)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
