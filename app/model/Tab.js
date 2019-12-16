'use strict';

module.exports = app => {
  const {
    INTEGER,
    STRING,
  } = app.Sequelize;

  const Tab = app.model.define('tab',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(20),
    },
    {
      // freezeTableName默认值是 false 如果是false的话，会自动在表名后加s复数
      freezeTableName: true,
      // timestamps默认值是true，如实是true会自动添加上 create_time 和update_time两个字段
      timestamps: false,
    }
  );

  return Tab;
};
