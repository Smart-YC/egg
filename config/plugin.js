'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };
/** 开启数据库插件*/
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
/** 开启跨域插件*/
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
