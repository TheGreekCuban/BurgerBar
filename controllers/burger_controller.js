const express = require("express")

const router = express.Router()

const burger = require("../models/burger.js")

//Create all our routes and setup logic in the routes where required. 
router.get("/", function (request, response) {
    burger.selectAll(function (data) {
        let burgerObject = {
            burgers: data
        }
        console.log("Make sure the data is logging: ", burgerObject)
        response.render('index', burgerObject)
    })
})

router.post("/api/burgers", (request, response) => {
    console.log(`request.body: ${request.body.burger_name}`)
    burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, request.body.devoured], result => {
        console.log(`api/burgers result: ${result}`)
        //Send back the id of the new burger
        response.json({
            id: result.insertId
        })
    })
})

router.put("/api/burgers/:id", (request, response) => {
    let condition = request.params.id
    burger.updateOne({
        devoured: request.body.devoured
    }, condition, result => {
        if (result.changedRows === 0) {
            //if no results were changed then there must not be a matching ID, so return a 404
            return response.status(404).end()
        }
        response.status(200).end()
    })
})

router.delete("/api/burgers/:id", (request, response) => {
    let condition = "id = " + request.params.id

    burger.deleteOne(condition, result => {
        if(result.affectedRows === 0) {
            return response.status(404).end()
        }
        response.status(200).end()
    })
})

//need this for the server
module.exports = router