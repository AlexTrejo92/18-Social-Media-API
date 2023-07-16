const connection = require('../config/connection');
const { Thought, User} = require('../models');
const { users } = require('./data');

connection.once('open', async()=>{
    console.log('connected');
    let usersCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }
// TODO: Check how to seed
    const users = [];
})