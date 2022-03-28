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
  async add() {
    const { ctx } = this
    const params = {
      ...ctx.request.body,
    }
    const res = await ctx.service.diary.add(params)
    if (res) {
      ctx.body = {
        status: 200,
        data: res,
      }
    } else {
      ctx.body = {
        status: 500,
        data: '添加失败',
      }
    }
  }
  async detail() {
    const { ctx } = this
    const { id } = ctx.params
    const res = await ctx.service.diary.detail(id)
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
