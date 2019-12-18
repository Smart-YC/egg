'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class ContentService extends Service {
  // 根据标签id查询内容列表
  async find(id) {
    const { ctx } = this;
    try {
      const content = await ctx.model.Content.findAll(
        {
          where: {
            type_id: id,
          },
        }
      );
      if (!content) {
        ctx.status = 200;
        return Object.assign(ERROR, {
          msg: '暂无数据',
        });
      }
      ctx.status = 200;
      return Object.assign(SUCCESS, {
        data: content,
      });
    } catch (error) {
      throw (500);
    }
  }
}

module.exports = ContentService;
