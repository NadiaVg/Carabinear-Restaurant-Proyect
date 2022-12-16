module.exports = app => {
    const dishes = require("../controllers/dish.controller");
    var upload = require('../multer/upload');
  
    var router = require("express").Router();
  
    // Create a new Restaurant
    router.post("/", upload.single('file'), dishes.create);

    // Retrieve all Restaurants
    router.get("/", dishes.findAll);

    router.get("/restaurant/:id", dishes.findAllByRestaurantId)
  
    // Retrieve a single Restaurant with id
    router.get("/:id", dishes.findOne);
  
    // Update a Restaurant with id
    router.put("/:id", upload.single('file'), dishes.update);
  
    // Delete a Restaurant with id
    router.delete("/:id", dishes.delete);
  
    app.use("/api/dishes", router);
  }