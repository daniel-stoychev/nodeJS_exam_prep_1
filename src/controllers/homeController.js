import { Router } from "express";
import animalService from "../services/animalService.js";

const homeController = Router();

homeController.get('/', async (req, res) => {
    const allAnimals = await animalService.getAll();
    const limitAnimalsToThree = allAnimals.slice(-3).reverse();
    res.render('home', { limitAnimalsToThree });
});

homeController.get('/search', (req, res) => {
    res.render('search')
});

export default homeController;