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

export default animalController;
