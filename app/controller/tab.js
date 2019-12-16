'use strict';

const Controller = require('egg').Controller;

class TabController extends Controller {
  // 查找标签列表
  async find() {
    const {
      ctx,
    } = this;
    const id = +ctx.query.id;
    ctx.body = await ctx.service.tab.find(id);
  }
}

module.exports = TabController;
