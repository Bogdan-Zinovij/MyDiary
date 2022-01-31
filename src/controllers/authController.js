'use strict';

const User = require('../db/models/User');
const generateAccessToken = require('../utils/generateAccessToken');
const generateRefreshToken = require('../utils/generateRefreshToken');
const { validationResult } = require('express-validator');

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      await User.create(req.body);

      res.status(201).json({ message: 'User was created!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors });
      }

      const { nickname, password } = req.body;
      const user = await User.findOne({ where: { nickname } });

      if (!user) {
        return res
          .status(400)
          .json({ message: `User was not found / incorrect password` });
      }

      const validPassword = user.password === password ? true : false;

      if (!validPassword) {
        return res
          .status(400)
          .json({ message: `User was not found / incorrect password` });
      }

      const accessToken = generateAccessToken(user.id);
      const refreshToken = generateRefreshToken(user.id);

      res.status(200).json({ accessToken, refreshToken });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async refreshToken(req, res) {
    try {
      const newAccessToken = generateAccessToken(req.userId);
      const newRefreshToken = generateRefreshToken(req.userId);

      res.status(200).json({ newAccessToken, newRefreshToken });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  async getUsers(req, res) {
    try {
      const userList = await User.findAll({ order: ['id'] });

      res.status(200).json(userList);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = new AuthController();
