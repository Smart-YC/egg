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

  // 新增用户
  async create(params) {
    const { ctx } = this;
    try {
      if (!params) {
        ctx.status = 401;
        return Object.assign(ERROR, {
          msg: '请输入请求参数',
        });
      }
      if (!params.name || !params.age) {
        ctx.status = 400;
        return Object.assign(ERROR, {
          msg: '用户名或年龄不能为空',
        });
      }
      const userDB = await ctx.model.User.findOne({
        where: {
          name: params.name,
        },
      });
      if (!userDB) {
        const user = await ctx.model.User.create(params);
        if (!user) {
          ctx.status = 401;
          return Object.assign(ERROR, {
            msg: '创建失败',
          });
        }
        ctx.status = 200;
        return Object.assign(SUCCESS, {});
      }
      ctx.status = 406;
      return Object.assign(ERROR, {
        msg: '用户名已存在',
      });
    } catch (error) {
      throw (500);
    }
  }

  // 删除用户
  async del(id) {
    const {
      ctx,
    } = this;
    try {
      const user = await ctx.model.User.findByPk(id);
      if (!user) {
        ctx.status = 400;
        return Object.assign(ERROR, {
          msg: '用户不存在',
        });
      }
      user.destroy();
      ctx.status = 200;
      return Object.assign(SUCCESS, {
      });

    } catch (error) {
      ctx.throw(500);
    }
  }

  // 更新用户信息
  async update(user) {
    const {
      ctx,
    } = this;
    try {
      console.log(user)
      const userDB = await ctx.model.User.findByPk(user.id);
      if (!userDB) {
        ctx.status = 400;
        return Object.assign(ERROR, {
          msg: '用户不存在',
        });
      }
      const res = await userDB.update(user);
      ctx.status = 200;
      return Object.assign(SUCCESS, {
        data: res,
      });

    } catch (error) {
      ctx.throw(500);
    }
  }
}

module.exports = UserService;
