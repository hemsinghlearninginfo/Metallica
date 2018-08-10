var mongoos = require('mongoose');

var userSchema = new mongoos.Schema({
    emaildId: { type : String, required : true, unique: true  },
    password: String,
    firstName: { type : String, required : true },
    lastName: { type : String, required : true },
    isDeleted: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});

module.exports = mongoos.model("User",userSchema);