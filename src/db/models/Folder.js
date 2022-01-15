'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const Folder = db.define(
  'folder',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Folder;
