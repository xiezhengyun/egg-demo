'use strict'

const Controller = require('../core/base_controller');

class UserController extends Controller {
  async create(){
    const { ctx } = this;
    // const rule = {
    //   goods: 'object',
    // };
    // ctx.validate(rule);
    const res = await ctx.service.user.create(ctx.request.body);
    this.success(res);
  }
}

module.exports = UserController