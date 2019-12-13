'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 首页
  async hello() {
    const {
      ctx,
    } = this;
    ctx.body = 'hello world!';
  }
  // 查找用户详情
  async find() {
    const {
      ctx,
    } = this;
    const id = +ctx.query.id;
    ctx.body = await ctx.service.user.find(id);
  }
  // 新增用户
  async create() {
    const {
      ctx,
    } = this;
    const params = ctx.query;
    ctx.body = await ctx.service.user.create(params);
  }
  // 查找用户详情
  async del() {
    const {
      ctx,
    } = this;
    const id = +ctx.query.id;
    ctx.body = await ctx.service.user.del(id);
  }
  // 更新用户详情
  async update() {
    const {
      ctx,
    } = this;
    console.log(ctx.query)
    const user = ctx.query.body;
    ctx.body = await ctx.service.user.update(user);
  }
}

module.exports = HomeController;
