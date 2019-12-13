/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575973661443_7174';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  /** 数据库配置使用 */
  exports.sequelize = {
    dialect: 'mysql',
    // database configuration
    host: '192.144.130.250',
    port: '3306',
    user: 'root',
    password: 'songyingchun123',
    database: 'test',
  };
  return {
    ...config,
    ...userConfig,
  };
};
