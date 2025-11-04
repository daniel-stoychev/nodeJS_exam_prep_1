import { Router } from "express";
import animalService from "../services/animalService.js";

const animalController = Router();

animalController.get('/add', (req, res) => {
    res.render('create')
});

animalController.post('/add', (req, res) => {
    const animalData = req.body;
    const userId = req.user.id;
    animalService.create(animalData, userId);
    res.redirect('/dashboard');

});

animalController.get('/:id', async (req, res) => {
    const animalId = req.params.id;
    const animal = await animalService.getOne(animalId);

    const isOwner = animal.owner && animal.owner.equals(req.user?.id);
    res.render('animals/details', { animal, isOwner });

});

animalController.get('/:id/delete', async (req, res) => {
    const animalId = req.params.id;
    const animal = await animalService.getOne(animalId);
    const isOwner = animal.owner && animal.owner.equals(req.user?.id);
    if (isOwner) {
        await animalService.removeOne(animalId);
        res.redirect('/dashboard');
    } else {
        throw new Error("Not owner - cannot delete!");

    }
});

animalController.get('/:id/edit', async (req, res) => {
    const animalId = req.params.id;
    const animal = await animalService.getOne(animalId);
    res.render('animals/edit', { animal });
});

animalController.post('/:id/edit', async (req, res) => {
    const animalId = req.params.id;
    const animal = await animalService.getOne(animalId);
    const idOwner = animal.owner && animal.owner.equals(req.user?.id);

    if (idOwner) {
        const newAnimal = await animalService.edit(animalId, req.body);
        res.redirect(`/animal/${animalId}`);
    } else {
        throw new Error("Not owner - cannot edit!");

    }

});



export default animalController;
