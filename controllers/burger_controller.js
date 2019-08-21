const express = require("express")

const router = express.Router()

const burger = require("../models/burger.js")

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
    burger.insertOne("burger_name", [req.body.burger_name], result => {
        console.log(`api/burgers result: ${result}`)
        response.json({
            id: result
        })
    })
})

router.put("/api/burgers/:id", (request, response) => {
    let condition = `id = ${req.params.id}`
    console.log(`condidition: ${condition}`)
    burger.updateOne({
        devoured: request.body.devoured
    }, condition, result => {
        if (result.changedRows === 0) {
            return response.status(404).end()
        }
        response.status(200).end()
    })
})

module.exports = router