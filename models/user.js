'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    f_name: DataTypes.STRING,
    l_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};