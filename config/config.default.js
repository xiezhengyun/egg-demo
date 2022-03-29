/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578305140648_3170'

  // // add your middleware config here
  // config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ['*'], // 配置白名单
  }

  config.cors = {
    // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许 Cookie 跨域跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  }

  // config.view = {
  //   mapping: { '.html': 'ejs' },
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'xiezhengyun@db',
      // 数据库名
      database: 'dairy',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  config.sequelize = {
    //数据库类型
    dialect: 'mysql',
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: 'xiezhengyun@db',
    // 数据库名
    database: 'dairy',
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
    define: {
      timestamps: false, //timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
      freezeTableName: true, //freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
    },
  }

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0',
    },
  }

  return {
    ...config,
    ...userConfig,
  }
}
