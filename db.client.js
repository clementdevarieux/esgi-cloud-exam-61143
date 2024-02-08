const { Sequelize } = require('sequelize')
require('dotenv').config();

const url_database_var = process.env.url_database
// database
const sequelize = new Sequelize(
  url_database_var,
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;