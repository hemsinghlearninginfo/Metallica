var mongoos = require('mongoose');

var strategySchema = new mongoos.Schema({
    strategy: String,
    isDeleted: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoos.model("Strategy",strategySchema);