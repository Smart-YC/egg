'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/content/list', controller.content.find);
};
