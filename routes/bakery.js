  
var express = require('express');
const bakery_controlers= require('../controllers/bakery');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET bakerys */
router.get('/', bakery_controlers.bakery_view_all_Page );
module.exports = router;

/* GET detail bakery page */
router.get('/detail', bakery_controlers.bakery_view_one_Page);

/* GET create bakery page */
router.get('/create',secured, bakery_controlers.bakery_create_Page);

/* GET create update page */
router.get('/update',secured, bakery_controlers.bakery_update_Page);

/* GET create bakery page */
router.get('/delete',secured, bakery_controlers.bakery_delete_Page);