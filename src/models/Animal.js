import { Schema, model, Types } from "mongoose";

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, 'Name must be at least 3 letters!']
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
        minLength: [3, 'Kind must be at least 3 letters!']
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
        minLength: [5, 'Location must be between 5 and 15 letters!'],
        maxlength: [15, 'Location must be between 5 and 15 letters!']
    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'Description too short. It must be between 5 and 50 letters!'],
        maxlength: [50, 'Description short. It must be between 5 and 50 letters!']
    },
    donations: [{
        type: Types.ObjectId, // Assuming you want to store the ObjectId of the user who donated
        ref: 'User' // Reference to the 'User' model
    }],
    owner: {
        type: Types.ObjectId, // This is the type for referencing other documents
        ref: 'User', // 'User' refers to the name of your User model
    }

});

const Animal = model('Animal', animalSchema);

export default Animal;