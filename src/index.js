import 'dotenv/config'
import './DB/mongoDB.js'

import { corsMiddleware } from './middleware/cors.js'
import express, { json } from 'express'
import { createRequire } from 'node:module'
import { serve, setup } from 'swagger-ui-express'
import movieRoutes from './routes/movies.js'
import userRoutes from './routes/user.js'
const require = createRequire(import.meta.url)
const swaggerDocument = require('../swagger/swagger')
// TODO: this option could be used in the future
// import swaggerDocument from '../swagger/swagger.json' with { type: 'json' }

const app = express()

app.use(json())
app.disable('x-powered-by')
app.use(corsMiddleware)

const basePath = '/api/v1'
const PORT = process.env.PORT || 3000
swaggerDocument.servers[0].url = `http://localhost:${PORT}${basePath}`

app.use(`${basePath}/users`, userRoutes)
app.use(`${basePath}/movies`, movieRoutes)
app.use(`${basePath}/api-docs`, serve, setup(swaggerDocument))

app.listen(PORT, () => {
  const serverURL =
    process.env.ENVIRONMENT === 'development'
      ? `http://localhost:${PORT}${basePath}/api-docs`
      : `https://${process.env.PROD_DOMAIN ?? 'DOMAIN_NOT_SET'}:${PORT}${basePath}/`
  console.log(`Server is running on ${serverURL}`)
})
