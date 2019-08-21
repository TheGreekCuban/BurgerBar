const orm = require("../config/orm.js")

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(response) {
            callback(response)
        })
    },
    insertOne: function(columns, value, callback) {
        orm.insertOne("burgers", columns, value, function(response) {
            callback(response)
        })
    },
    updateOne: function(columnValues, condition, callback) {
        orm.updateOne("burgers", columnValues, condition, function(response) {
            callback(response)
        })
    }
}

module.exports = burger