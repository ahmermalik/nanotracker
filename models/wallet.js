export default (sequelize, DataTypes) => {
    const Wallet = sequelize.define('wallet', {
        wallet_address: DataTypes.STRING,
    });

    Wallet.associate = (models) => {
        Wallet.belongsToMany(models.User, {
            foreignKey: 'user',
        });
    };

    return Wallet;
};