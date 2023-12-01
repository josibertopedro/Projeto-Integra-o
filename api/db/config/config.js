require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.BD_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.BD_DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.BD_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.BD_DIALECT 
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.BD_PASS,
    "database": process.env.DB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.BD_DIALECT
  }
}
