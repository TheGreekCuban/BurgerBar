const orm = require("../config/orm.js")

//The model is used in the controller. When the / route is hit the select all method on this burger object is called which runs the query, returns a response to the controller. Then we manipulate that data how we want and render it to the page in the controller. 

const burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (response) {
            callback(response)
        })
    },
    insertOne: function (columns, value, callback) {
        orm.insertOne("burgers", columns, value, function (response) {
            callback(response)
        })
    },
    updateOne: function (columnValues, condition, callback) {
        orm.updateOne("burgers", columnValues, condition, function (response) {
            callback(response)
        })
    },
    deleteOne: function (condition, callback) {
        orm.deleteOne("burgers", condition, function(response) {
            callback(response)
        })
    }
}

module.exports = burger