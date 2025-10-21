import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = model('User', userSchema);

export default User;