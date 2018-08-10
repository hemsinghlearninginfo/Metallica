const mongoose = require("mongoose");
const UserRole = require("../model/user/userRole");

var userRolesData = [
    { role: "sysadmin", description: "User who is able to handle all users and group admin" },
    { role: "groupadmin", description: "Can handle there own child users" },
    { role: "user", description: "Normal application user" }
];

function seedUserDB() {
    console.log('start : user seeding in db');
    seedUserRolesInDB()
    console.log('end : user seeding in db');
}

function seedUserRolesInDB() {
    //console.log('start: seeding user roles');
    userRolesData.forEach(function (userRole) {
        UserRole.create(userRole, function (err, createdUserRole) {
            createdUserRole.save();
            //console.log(`Data Saved : ${createdUserRole.role}`);
        });
    });
   // console.log('end : seeding user roles');
}

module.exports = seedUserDB;