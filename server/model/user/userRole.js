var mongoos = require('mongoose');

var userRoleSchema = new mongoos.Schema({
    role: { type : String, required : true, unique: true  },
    description: String,
    isDeleted: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoos.model("UserRole",userRoleSchema);