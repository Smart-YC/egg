'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
    DATE,
  } = app.Sequelize;

  const Content = app.model.define('content',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      type_id: INTEGER,
      title: STRING(30),
      thumb: STRING(255),
      content: STRING(255),
      time: DATE,
      head_img: STRING(255),
      author: STRING(255),
    },
    {
      // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
      freezeTableName: true,
      // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
      timestamps: false,
    }
  );

  return Content;
};
