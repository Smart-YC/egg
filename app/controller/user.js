'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async find() {
    const {
      ctx,
    } = this;
    const id = +ctx.query.id;
    ctx.body = await ctx.service.user.find(id);
  }
}

module.exports = HomeController;
