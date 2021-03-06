var bakery = require('../models/bakery');
// List of all bakerys
exports.bakery_list = async function(req, res) {
    try{
        thebakerys = await bakery.find();
        res.send(thebakerys);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
//res.send('NOT IMPLEMENTED: bakery list');
};

// for a specific Costume.
exports.bakery_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await bakery.findById( req.params.id)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }

};

// Handle bakery create on POST.
exports.bakery_create_post = async function (req, res) {
    console.log(req.body)
    let document = new bakery();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumeItemname":"goat", "cost":12, "size":"large"}
    document.Itemname = req.body.Itemname;
    document.Quantity = req.body.Quantity;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle bakery delete form on DELETE.
exports.bakery_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await bakery.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
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
    } 
    catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// VIEWS
// Handle a show all view
exports.bakery_view_all_Page = async function (req, res) {
    try {
        thebakery = await bakery.find();
        res.render('bakery', { title: 'bakery Search Results', results: thebakery });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query
exports.bakery_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await bakery.findById( req.query.id)
        res.render('bakerydetail', { title: 'bakery Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.bakery_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('bakerycreate', { title: 'bakery Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{"error": Error creating ${err}}`); 
    }
};

// Handle building the view for updating a fish.
// query provides the id
exports.bakery_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await bakery.findById(req.query.id)
        res.render('bakeryupdate', { title: 'bakery Update', toShow: result });
    }
    catch(err){
        res.status(500)
        
    }
};

// Handle a delete one view with id from query
exports.bakery_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await bakery.findById(req.query.id)
        res.render('bakerydelete', { title: 'bakery Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};