

const Service = require('egg').Service

class DiaryService extends Service {  
  async list() {  
    const { app, ctx } = this
    try {
      const res = await app.mysql.select('diary')
      return res
    } catch (error) {
      console.log('----------------')
      console.log(mysql)
      console.log('----------------')
      console.log(error)
      return null
    }
  }
}

module.exports = DiaryService
