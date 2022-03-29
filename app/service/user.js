'use strict'

const Service = require('egg').Service

class GoodsService extends Service {

  async create(params = {}) {
    let { user, userUuid, userName } = params;
    const { app } = this;
    // const crateInfo = app.getCrateInfo(userUuid, userName);

    user = { ...user };
    return await app.model.User.add(params);
  }
}

module.exports = GoodsService