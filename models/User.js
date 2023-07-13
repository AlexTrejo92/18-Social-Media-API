const {Schema, model} = require('mongoose');
const ThoughtSchema = require('./Thought');

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, //TODO: revise this
            required: true,
            trimmed: yes, //TODO: revise this
        }
    },
    {
        email: {
            type: String,
            unique: true,
            required:true,
            validator //TODO: check this
        }
    },
    {
        thoughts: [Thought]
    },
    {
        friends:[UsersSchema]
    }
)
//TODO: create virtuals

