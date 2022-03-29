'use strict';

module.exports = app => {
  const { Sequelize, model, getSortInfo, checkUpdate } = app;
  const userSchema = require('../schema/user.js')(app);
  const User = model.define('user', userSchema);
  
  /**
   * 新增用户
   * @param {object} user - 条件
   * @return {string} - 类别uuid
   */
   User.add = async user => {
    const result = await User.create(user);
    return result;
  };

  /**
   * 查询用户
   * @param {object} { id, name } - 条件
   * @return {object|null} - 查找结果
   */
   User.get = async ({ id, name }) => {
    return await User.findOne({
      where: { id, name },
    });
  };

  /**
   * 修改用户
   * @param {object} user - 条件
   * @return {string} - 商品uuid
   */
   User.saveModify = async user => {
    const { id, name, age } = user;
    const result = await User.update(User, { where: { id, name, age } });

    // checkUpdate(result);

    return result;
  };

  /**
   * 查询key为类别的商品数据
   * @param {object} { categoryAttributes, name, goodsAttributes } - 条件
   * @return {object|null} - 查找结果
   */
  User.list = async () => {
    return await User.findAll();
  };

  // /**
  //  * 查询某类别的商品数量
  //  * @param {string} categoryUuid - 类别uuid
  //  * @return {number|null} - 商品数量
  //  */
  //  User.countGoodsByCategory = async categoryUuid => {
  //   return await User.count({
  //     where: { categoryUuid },
  //   });
  // };

  /**
   * 查询商品分页列表
   * @param {object} { name, attributes, pagination, filter } - 条件
   * @return {object|null} - 查找结果
   */
  //  User.query = async ({ name, attributes, pagination = {}, filter = {}, sort = [] }) => {
  //   const { page, pageSize: limit } = pagination;
  //   const { keywordsLike, categoryUuid, status } = filter;
  //   const order = getSortInfo(sort);
  //   const condition = {
  //     offset: (page - 1) * limit,
  //     limit,
  //     order,
  //     attributes,
  //     where: { name },
  //   };

  //   if (categoryUuid) {
  //     condition.where.categoryUuid = categoryUuid;
  //   }

  //   if (status) {
  //     condition.where.status = status;
  //   }

  //   if (keywordsLike) {
  //     condition.where.name = { [Op.like]: `%%${keywordsLike}%%` };
  //   }

  //   const { count, rows } = await User.findAndCountAll(condition);

  //   return { page, count, rows };
  // };

  return User;
};

