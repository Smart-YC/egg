'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.hello);
  router.get('/user/list', controller.user.find);
  router.get('/user/create', controller.user.create);
  router.get('/user/del', controller.user.del);
  router.post('/user/update', controller.user.update);
};
