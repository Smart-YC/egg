'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };
/** 开启数据库插件*/
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
