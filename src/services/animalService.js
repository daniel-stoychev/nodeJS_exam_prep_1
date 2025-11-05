import Animal from "../models/Animal.js";

export default {
    async create(animalData, userId) {

        await Animal.create({
            ...animalData,
            owner: userId
        });

    },
    // async create(animalData, userId) {
    //     // Mongoose ще автоматично ще кастне userId (стринг) към ObjectId, ако е валиден
    //     const newAnimal = await Animal.create({
    //         ...animalData,
    //         owner: userId // Прикачаме ID на създателя
    //     });
    //     return newAnimal; // Връщаме новосъздаденото животно (с _id)
    // },

    getAll() {
        const allAnimals = Animal.find();
        return allAnimals;
    },
    getOne(id) {
        const selectedAnimal = Animal.findById(id);

        return selectedAnimal;
    },
    removeOne(id) {
        return Animal.findByIdAndDelete(id);
    },
    edit(id, data) {
        return Animal.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    },
    donate(animalId, userId) {
        return Animal.findByIdAndUpdate(animalId, {
            $addToSet: { donations: userId },
            new: true,
            runValidators: true
        });
    }

}