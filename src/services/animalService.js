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