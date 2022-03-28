'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.test);
  router.get('/list', controller.home.list);
  router.post('/add', controller.home.add);
  router.get('/detail/:id', controller.home.detail);
  router.post('/delete', controller.home.delete);
  router.post('/update', controller.home.update);
};
