import User from "../models/User.js";

export default {
    register(userData) {
        User.create(userData);
    },
    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("Username or password invalid!");
        }

    }
}