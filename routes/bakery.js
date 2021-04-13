var express = require('express');
const bakery_controlers= require('../controllers/bakery');
var router = express.Router();

/* GET costumes */
router.get('/', bakery_controlers.bakery_view_all_Page );
module.exports = router;

/* GET detail bakery page */
router.get('/detail', bakery_controlers.bakery_view_one_Page);

/* GET create bakery page */
router.get('/create', bakery_controlers.bakery_create_Page);

/* GET create update page */
router.get('/update', bakery_controlers.bakery_update_Page);

/* GET create bakery page */
router.get('/delete', bakery_controlers.bakery_delete_Page);


