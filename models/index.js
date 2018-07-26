import Sequelize from 'sequelize';

const sequelize = new Sequelize('nano_wallet', 'postgres', 'postgres');

const models = {
    User: sequelize.import('./users'),
    Wallet: sequelize.import('.wallet'),
};


Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
        model[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;


export default models;