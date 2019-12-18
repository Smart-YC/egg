'use strict';

const Controller = require('egg').Controller;

class ContentController extends Controller {
  // 根据标签id查找内容列表
  async find() {
    const {
      ctx,
    } = this;
    const id = +ctx.query.id;
    ctx.body = await ctx.service.content.find(id);
  }
}

module.exports = ContentController;
