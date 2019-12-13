'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class UserService extends Service {
  // 查询用户详情
  async find(id) {
    const { ctx } = this;
    try {
      if (!id) {
        ctx.status = 401;
        return Object.assign(ERROR, {
          msg: '请输入请求参数',
        });
      }
      const user = await ctx.model.User.findByPk(id);
      if (!user) {
        ctx.status = 401;
        return Object.assign(ERROR, {
          msg: '查无此人',
        });
      }
      ctx.status = 200;
      return Object.assign(SUCCESS, {
        data: user,
      });
    } catch (error) {
      throw (500);
    }
  }
}

module.exports = UserService;
