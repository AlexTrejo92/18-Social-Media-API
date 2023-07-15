const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');

module.exports = {
async getUsers(req,res) {
  try {
    const users = await User.find();

    const usersObj = {
      users
    };
    res.json(usersObj);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
}

// TODO: Use this code as a base
//   async updateApplication(req, res) {
//     try {
//       const application = await Application.findOneAndUpdate(
//         { _id: req.params.applicationId },
//         { $set: req.body },
//         { runValidators: true, new: true } //validators for thought or user length.
//       );

//       if (!application) {
//         return res.status(404).json({ message: 'No application with this id!' });
//       }

//       res.json(application);
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
}