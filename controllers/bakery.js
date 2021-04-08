var bakery = require('../models/bakery');

// List of all bakery
exports.bakery_list = async function(req, res) {
    try{
        thebakery = await bakery.find();
        res.send(thebakery);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};
// for a specific bakery.
exports.bakery_detail = function(req, res) {
res.send('NOT IMPLEMENTED: bakery detail: ' + req.params.id);
};
// Handle bakery create on POST.
exports.bakery_create_post = async function(req, res) {
    console.log(req.body)
    let document = new bakery();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"bakerytype":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle bakery delete form on DELETE.
exports.bakery_delete = function(req, res) {
res.send('NOT IMPLEMENTED: bakery delete DELETE ' + req.params.id);
};
// Handle bakery update form on PUT.
exports.bakery_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: bakery update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.bakery_view_all_Page = async function(req, res) {
    try{
        thebakery = await bakery.find();
        res.render('bakery', { title: 'Bakery Search Results', results: thebakery });
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
};

