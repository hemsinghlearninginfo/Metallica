const mongoose = require("mongoose");
const user = require("./user");
const strategy = require("./strategy");

function seedDB() {
    user();
    strategy();
}

module.exports = seedDB;