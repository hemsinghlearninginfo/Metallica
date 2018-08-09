var mongoos = require('mongoose');

var strategyDescriptionSchema = new mongoos.Schema({
    content: String,
    isDeleted: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now },
    category: {
        id: {
            type: mongoos.Schema.Types.ObjectId,
            ref: "StrategyCategory"
        },
        strategyCategory: String
    }
});

module.exports = mongoos.model("StrategyDescription", strategyDescriptionSchema);