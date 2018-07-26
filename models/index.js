'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

import Sequelize from 'sequelize';

const sequelize = new Sequelize('nano_wallet', 'postgres', 'postgres',{
  dialect: 'postgres',
});

const models = {
    User: sequelize.import('./user'),
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
