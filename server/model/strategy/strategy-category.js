var mongoos = require('mongoose');

var strategyCategorySchema = new mongoos.Schema({
    strategyCategory: String,
    description: String,
    isDeleted: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoos.model("StrategyCategory",strategyCategorySchema);