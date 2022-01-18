const User = require('../db/models/User');
const generateAccessToken = require('../utils/generateAccessToken');

class authController {
  async registration(req, res) {
    try {
      await User.create(req.body);
      res.status(201).json({ message: 'User was created!' });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async login(req, res) {
    try {
      const { nickname, password } = req.body;
      const user = await User.findOne({ where: { nickname } });
      if (!user) {
        return res.status(400).json({ message: `User ${username} not found` });
      }
      const validPassword = user.password === password ? true : false;
      if (!validPassword) {
        return res
          .status(400)
          .json({ message: `User was not found / incorrect password` });
      }
      const token = generateAccessToken(user.id);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Login error' });
    }
  }

  async getUsers(req, res) {
    try {
      const userList = await User.findAll({ order: ['id'] });
      res.status(200).json(userList);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}

module.exports = new authController();
