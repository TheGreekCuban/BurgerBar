const connection = require("./connection.js")

const orm = {
    selectAll: function(queryInput, callback) {
        let queryString = `SELECT * FROM ${queryInput};`
        connection.query(queryString, (error, result) => {
            if (error) throw error
            callback(result
                )
        })
    },

}

module.exports = orm