const connection = require("./connection.js")


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function (tableName, callback) {
        let queryString = `SELECT * FROM ${tableName};`
        connection.query(queryString, (error, result) => {
            if (error) throw error
            callback(result)
        })
    },
    insertOne: function (tableName, columns, value, callback) {
        let queryString = `INSERT INTO ${tableName} (${columns}) VALUES ?`

        connection.query(queryString, [value], (error, result) => {
            if (error) throw error

            callback(result)
        })
    },
    updateOne: function (tableName, columnValues, condition, callback) {
        let queryString = `UPDATE ${tableName} SET ${objToSql(columnValues)} WHERE id = ${condition}`

        connection.query(queryString, (error, result) => {
            if (error) throw error

            callback(result)
        })
    }
}

module.exports = orm