'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/tab/list', controller.tab.find);
};
