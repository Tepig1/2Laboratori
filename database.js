const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("myapp.db");

//  продукты
db.run(`
CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price REAL NOT NULL
);
`);

//  пользователи
db.run(`
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL,
  firstName TEXT,
  lastName TEXT,
  city TEXT
);
`);

// Экспортируем объект базы данных для использования в других частях приложения
module.exports = db;
