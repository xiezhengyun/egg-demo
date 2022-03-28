const Service = require('egg').Service

class DiaryService extends Service {
  async list() {
    const { app } = this
    try {
      const res = await app.mysql.select('dairy')
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
  async add(params) {
    const { app } = this
    try {
      const res = await app.mysql.insert('dairy', params)
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

module.exports = DiaryService
