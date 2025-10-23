import { Schema, model } from "mongoose";

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    years: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    kind: {
        type: String,
        required: true,
        minLength: 3
    },
    imageUrl: {
        type: String,
        required: true,
        match: /^https?:\/\//,
    },
    need: {
        type: String,
        required: true,
        minLength: 3,
        maxlength: 20
    },
    location: {
        type: String,
        required: true,
        minLength: 5,
        maxlength: 15
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxlength: 50
    },
    donations: [
        {
            type: Schema.Types.ObjectId, // Assuming you want to store the ObjectId of the user who donated
            ref: 'User' // Reference to the 'User' model
        }
    ],
    owner: {
        type: Schema.Types.ObjectId, // This is the type for referencing other documents
        ref: 'User', // 'User' refers to the name of your User model
    }

});

const Animal = model('Animal', animalSchema);

export default Animal;