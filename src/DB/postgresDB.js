const Sequelize = require('sequelize')
const pc = require('picocolors')
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    schema: process.env.DB_SCHEMA,
    logging: false
  }
)

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(pc.blue('\n>>>Connected to postgresDB...'))
    console.log('\tDatabase connected and synced\n')
  })
  .catch((err) => {
    console.log(pc.red('\n>>>Error connecting to the database:', err))
    process.exit(1)
  })

module.exports = sequelize
