export default (sequelize, DataTypes) => {
    const Wallet = sequelize.define("wallet", {
        wallet_address: {
            type: DataTypes.STRING,
            unique: false,
        },
    });

    Wallet.associate = (models) => {
        Wallet.belongsToMany(models.User, {
            foreignKey: 'user',
        });
    };

    return Wallet;
};