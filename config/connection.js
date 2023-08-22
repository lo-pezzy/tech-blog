const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        // Your MySQL username,
        process.env.DB_USER,
        // Your MySQL password
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;