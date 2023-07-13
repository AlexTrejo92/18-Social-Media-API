const {Schema, model} = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validatelenght: 12
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }
)