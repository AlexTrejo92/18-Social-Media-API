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
        reactions:[reactionSchema] // TODO: revise this
    }
);
//TODO: Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;