require('dotenv').config()
require('./DB/mongoDB')

const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/user')
const movieRoutes = require('./routes/movies')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger/swagger.json')

const app = express()

app.use(express.json())
app.disable('x-powered-by')
app.use(cors())

const basePath = '/api/v1'
const PORT = process.env.PORT || 3000
swaggerDocument.servers[0].url = `http://localhost:${PORT}${basePath}`

app.use(`${basePath}/users`, userRoutes)
app.use(`${basePath}/movies`, movieRoutes)
app.use(
  `${basePath}/api-docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

app.listen(PORT, () => {
  const serverURL =
    process.env.ENVIRONMENT === 'development'
      ? `http://localhost:${PORT}${basePath}/api-docs`
      : `https://${process.env.PROD_DOMAIN ?? 'DOMAIN_NOT_SET'}:${PORT}${basePath}/`
  console.log(`Server is running on ${serverURL}`)
})
