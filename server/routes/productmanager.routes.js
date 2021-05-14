const ProductManagerController = require ('../controllers/productmanager.controller');


module.exports = function(app) {
    app.post('/api/productmanager', ProductManagerController.create)
};