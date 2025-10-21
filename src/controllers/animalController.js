import { Router } from "express";

const animalController = Router();

animalController.get('/add', (req, res) => {
    res.render('create')
});

export default animalController;
