'use strict';
module.exports = (sequelize, DataTypes) => {
  var funny = sequelize.define('funny', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  funny.associate = function(models) {
    // associations can be defined here
  };
  return funny;
};