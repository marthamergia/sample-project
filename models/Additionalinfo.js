const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Client = require('./client');

const Additionalinfo = sequelize.define('Additionalinfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Additionalinfo.hasMany(Client, { foreignKey: 'additionalinfo_id' });

module.exports = Additionalinfo;
