export default (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username:{
            type: DataTypes.STRING,
            unique: true,
        },
        wallet_address:{
            type: DataTypes.STRING,
            unique: false,
        },
    });

    User.associate = (models) => {
       User.belongsToMany(models.Wallet, {
            through:'wallet',
            foreignKey: 'userId',
        });
    };

    return User;
};