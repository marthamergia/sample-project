const { DataTypes } = require('sequelize');
const sequelize = require('../config');
const Additionalinfo = require('./additionalinfo');

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.STRING,
  },
});

Client.belongsTo(Additionalinfo, { foreignKey: 'additionalinfo_id' });

module.exports = Client;
