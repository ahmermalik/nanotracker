'use strict';
module.exports = (sequelize, DataTypes) => {
    var wallet = sequelize.define('wallet', {
        address: DataTypes.STRING,
    });

    wallet.associate = function (models) {
        wallet.belongsTo(models.user);
    };

    return wallet;
};