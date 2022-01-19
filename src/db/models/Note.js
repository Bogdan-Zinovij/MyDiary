'use strict';

const DataTypes = require('sequelize');
const db = require('../db');

const Note = db.define(
  'note',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    folderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(8000),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    db,
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Note;
