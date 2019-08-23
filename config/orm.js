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

//Helper function that prints question marks (as many as the length of our values array)
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

//Thi is the orm object where will create three methods to render, insert and update the sql db.

//The functions will call a aquery then the query result will be put into a call back. The call back will carry the data from the query to the model. EX: Once the model runs burger.selectAll() it will run select all in the orm and return that callback with the data which is then called on the model, finally returning the data for the controller. 

const orm = {
    selectAll: function (tableName, callback) {
        let queryString = "SELECT * FROM " + tableName
        connection.query(queryString, (error, result) => {
            if (error) throw error
            callback(result)
        })
    },
    insertOne: function (tableName, columns, value, callback) {
        let queryString = "INSERT INTO " + tableName + " (" + columns + ") " + "VALUES " + " (" + printQuestionMarks(value.length) + ")"
        connection.query(queryString, value, (error, result) => {
            if (error) throw error

            callback(result)
        })
    },
    updateOne: function (tableName, columnValues, condition, callback) {
        console.log("object to sql: ", objToSql(columnValues))
        
        let queryString = "UPDATE " + tableName + " SET " + objToSql(columnValues) + " WHERE id = " + condition
        connection.query(queryString, (error, result) => {
            if (error) throw error

            callback(result)
        })
    },
    deleteOne: function(tableName, condition, callback) {
        let queryString = "DELETE FROM " + tableName + " WHERE " + condition
        console.log(`DELETE query string: ${queryString}`)
        connection.query(queryString, (error, result) => {
            if(error) throw error

            callback(result)
        }) 
    }
}

module.exports = orm