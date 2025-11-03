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

export default animalController;
