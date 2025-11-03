import Animal from "../models/Animal.js";

export default {
    create(animalData, userId) {
        {
            Animal.create({
                ...animalData,
                owner: userId
            });
        }
    },
    getAll() {
        const allAnimals = Animal.find();
        return allAnimals;
    }
}