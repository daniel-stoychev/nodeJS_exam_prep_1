import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minlength: [10, 'The email should be at least 10 chats long!'],
        match: [/^[A-z0-9._-]+@[A-z0-9._-]+\.[a-z]+$/, 'Not valid mail account format!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minlength: [4, 'The password should be at least 4 chats long!']
    }
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = model('User', userSchema);

export default User;