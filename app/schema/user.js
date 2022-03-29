'use strict'

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }
}
