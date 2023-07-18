const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 80,
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
    },
    //added to allow the use of virtuals
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
//Virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;