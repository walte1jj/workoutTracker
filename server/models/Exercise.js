const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
    {
        username: {
            type: String
        },
        description: {
            type: String,
            required: 'You need to insert a description!',
            minlength: 1,
            maxlength: 280
        },
        duration: {
            type: Number,
            required: 'Enter an amount'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        }
    }
)

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;