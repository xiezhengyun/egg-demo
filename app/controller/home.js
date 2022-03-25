'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg3'
  }
  async test() {
    const { ctx } = this
    ctx.body = '测试接口'
  }
  async list() {
    const { ctx } = this
    const res = await ctx.service.diary.list()
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      }
    } else {
      ctx.body = {
        status: 500,
        data: '获取失败',
      }
    }
  }
}

module.exports = HomeController
