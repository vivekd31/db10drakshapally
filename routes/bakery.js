var express = require('express');
const bakery_controlers= require('../controllers/bakery');
var router = express.Router();

/* GET costumes */
router.get('/', bakery_controlers.bakery_view_all_Page );
module.exports = router;
