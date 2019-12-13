'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class UserService extends Service {
  async find(id) {
    const { ctx } = this;
    try {
      const user = await ctx.model.User.findByPk(id);
      if (!user) {
        ctx.status = 401;
        return Object.assign(ERROR, {
          msg: 'user not found',
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
