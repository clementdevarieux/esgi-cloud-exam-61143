const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://db_postgre_exo_1_61143_user:je8IhihaJ1bgL1TiGF2wBSEHHL8wqozX@dpg-cn29upn109ks7394k0r0-a.frankfurt-postgres.render.com/db_postgre_exo_1_61143',
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