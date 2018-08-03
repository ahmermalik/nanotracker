'use strict';
module.exports = (sequelize, DataTypes) => {
    var user = sequelize.define('user', {
        f_name: DataTypes.STRING,
        l_name: DataTypes.STRING,
        email: DataTypes.STRING,
        google_id: DataTypes.STRING,
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return user;
};