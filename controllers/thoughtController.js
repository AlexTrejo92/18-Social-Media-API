const {ObjectId} = require('mongoose').Types;
const {User, Thought} = require('../models');

module.exports = {
    async getThoughts(req,res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
        },
    async getSingleThought(req,res) {
        try {
            const singleThought = await Thought.findOne({_id: req.params.thoughtID})
            if (!singleThought){
            return res.status(404).json({message: 'Thought not found'})
            }
            res.json(singleThought)
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        },
    async createThought(req,res) {
        try {
            const newThought = await Thought.create(req.body)
            // TODO: Check challenge requirements for thoughtText, username, userID
            res.json(newThought)
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
        },
    async updateThought(req, res) {
        try{ // TODO: check if there's something missing here
            const updatedThought = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtID},
            {$set: req.body},
            {new: true}
            )
            if (!updatedThought){
            return res.status(404).json({message: 'Update failed'})
            }
            res.json(updatedThought)
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