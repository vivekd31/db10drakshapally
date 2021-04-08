var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var bakery_controller = require('../controllers/bakery');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// bakery ROUTES ///
// POST request for creating a bakery.
router.post('/bakery', bakery_controller.bakery_create_post);
// DELETE request to delete bakery.
router.delete('/bakery/:id', bakery_controller.bakery_delete);
// PUT request to update bakery.
router.put('/bakery/:id', bakery_controller.bakery_update_put);
// GET request for one bakery.
router.get('/bakery/:id', bakery_controller.bakery_detail);
// GET request for list of all bakery items.
router.get('/bakery', bakery_controller.bakery_list);
module.exports = router;