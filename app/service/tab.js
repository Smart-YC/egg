'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class TabService extends Service {
  // 查询标签列表
  async find() {
    const { ctx } = this;
    try {
      const tab = await ctx.model.Tab.findAll();
      console.log(tab, '4873598730580385');
      if (!tab) {
        ctx.status = 401;
        return Object.assign(ERROR, {
          msg: '暂无数据',
        });
      }
      ctx.status = 200;
      return Object.assign(SUCCESS, {
        data: tab,
      });
    } catch (error) {
      throw (500);
    }
  }
}

module.exports = TabService;
