const mongoose = require("mongoose");
const strategyCategory = require("../model/strategy/strategy-category");
const strategyDesciption = require("../model/strategy/strategy-description");

var data = [
    {
        strategyCategory: "Basic",
        description: "Basic market moves"
    }
];

function seedStrategyDB() {
    // Remove all users
    console.log('seeding db');
}

module.exports = seedStrategyDB;