'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

// 配置 egg-swagger-doc 插件信息
// module.exports.swaggerdoc = {
//   enable: true,   // 启用 swagger-ui 默认启用
//   package: 'egg-swagger-doc', // 指定 第三方插件 包名称
// };
