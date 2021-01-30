const indexRouter = require('express').Router();
const controllers = require('../controller/index');

indexRouter.get('/', controllers.indexCtrl);
indexRouter.post('/validate-rule', controllers.valRule)

module.exports = indexRouter;
