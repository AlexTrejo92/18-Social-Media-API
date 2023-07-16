const {Schema, model} = require('mongoose');
// const ThoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, //TODO: revise this
            required: true,
            trimmed: true, //TODO: revise this
        },
        email: {
            type: String,
            unique: true,
            required:true,
            validator //TODO: check this
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends:[{
            type: Schema.Types.ObjectId,
            ref: 'user'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
//TODO: create virtuals
userSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('user', userSchema);

module.exports = User;