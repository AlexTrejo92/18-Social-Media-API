const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');

module.exports = {
async getUsers(req,res) {
  try {
    const users = await User.find().populate('thoughts');

    res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
},
async getSingleUser(req,res) {
  try {
    const user = await User.findOne({_id: req.params.userID})
    .populate('thoughts');
    if (!user){
      return res.status(404).json({message: 'User not found with this ID'})
    }
    res.json(user)
    // !user ? res.status(404).json({message: 'User not found with this ID'}):res.json(user)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
},

async createUser(req,res) {
  try {
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch(err) {
    console.log(err);
    return res.status(500).json(err);
  }
},

async updateUser(req, res) {
  try{
    const updatedUser = await User.findOneAndUpdate(
      {_id: req.params.userID},
      {$set: req.body},
      {new: true}
    )
    if (!updatedUser){
      return res.status(404).json({message: 'Update failed'})
    }
    res.json(updatedUser)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
},

async deleteUser(req, res) {
  try {
    const deleteUser = await User.findOneAndDelete(
      {_id: req.params.userID}
    )
    if (!deleteUser){
      return res.status(404).json({message: 'User not found'})
    }
    res.json({message: 'User deleted'})
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}
}