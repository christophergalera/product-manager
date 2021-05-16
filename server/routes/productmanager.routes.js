const ProductManagerController = require ('../controllers/productmanager.controller');


module.exports = function(app) {
    app.post('/api/productmanager', ProductManagerController.create)
    app.get('/api/productmanager', ProductManagerController.getAll)
    app.get('/api/productmanager/:id', ProductManagerController.getOne)
};