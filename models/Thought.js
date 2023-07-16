const {Schema, model} = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validatelenght: 12
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type:String,
            required: true
        },
        reactions:[reactionSchema]
    }
);
//TODO: Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

const Thoughts = model('Thoughts', thoughtSchema);

module.exports = Thoughts;