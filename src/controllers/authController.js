'use strict';

const User = require('../db/models/User');
const generateAccessToken = require('../utils/generateAccessToken');
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

      const token = generateAccessToken(user.id);

      res.status(200).json({ token });
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
