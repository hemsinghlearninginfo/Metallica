const Promise = require('promise');
const express = require('express');
const User = require('../api/user/model');
const UserRole = require('../api/userrole/model');

const userObjects = [
    {
        email: 'hemsingh81@gmail.com',
        password: 'password123!',
        firstName: 'Hem',
        lastName: 'Singh',
        role: 'sysadmin'
    },
    {
        email: 'punam@gmail.com',
        password: 'password123!',
        firstName: 'Punam',
        lastName: 'Singh',
        role: 'groupadmin'
    },
    {
        email: 'sammansingh@gmail.com',
        password: 'password123!',
        firstName: 'Samman',
        lastName: 'Singh',
        role: 'user'
    }

];

function userSeed() {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'testing') {
        User.estimatedDocumentCount({}, (err, count) => {
            if (count < 1) {
                userObjects.forEach((r) => {
                    getUserRole(r.role)
                        .then(foundUserRole => {
                            var newUser = new User({
                                email: r.email,
                                password: r.password,
                                firstName: r.firstName,
                                lastName: r.lastName,
                                role: foundUserRole._id
                            });
                            newUser.save(function (err) {
                                if (err) {
                                    console.log('Error : ', err)
                                }
                            });
                        })
                        .catch(err => console.error(err));
                });
            }
        });
    }
}

function getUserRole(objRole) {
    return new Promise((resolve, reject) => {
        UserRole.findOne({ role: objRole }, function (err, foundUserRole) {
            if (err) {
                return reject(err);
            }
            else {
                return resolve(foundUserRole)
            }
        });
    });
}

module.exports = userSeed;