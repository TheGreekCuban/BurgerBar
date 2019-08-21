const express = require("express")

const router = express.Router()

const burger = require("../models/burger.js")

router.get("/", function(request, response) {
    burger.selectAll(data => {
        let burgerObject = {
            burgers: data
        }
        console.log("Make sure the data is logging: ", burgerObject)
        response.render('index', burgerObject)
    })
})