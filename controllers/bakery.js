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
exports.bakery_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await bakery.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//Handle bakery update form on PUT.
exports.bakery_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await bakery.findById( req.params.id)
        // Do updates of properties
        if(req.body.Itemname) toUpdate.Itemname = req.body.Itemname;
        if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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

