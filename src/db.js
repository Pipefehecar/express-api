const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  schema: process.env.DB_SCHEMA
});


sequelize.sync({force: false})
.then(() => {
    console.log('Database connected and synced');
})
.catch((err) => {
    console.log('Error connecting to the database:', err);
    process.exit(1);
});

module.exports = sequelize;
