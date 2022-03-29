
'use strict';

const path = require('path');
/**
 * # 升级数据库
    npx sequelize db:migrate

    # 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
    npx sequelize db:migrate:undo

    # 可以通过 `db:migrate:undo:all` 回退到初始状态
    npx sequelize db:migrate:undo:all
 * 
 * 
 * 
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      // 初始化user
      const schema = require(path.join('../../app/schema/user.js'))({ Sequelize });
      await queryInterface.createTable('user', schema);
    } catch (e) {
      console.log(e);
    }
  },

  down: async queryInterface => {
    // 删除user
    await queryInterface.dropTable('user');
  },
};
