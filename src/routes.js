import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";
import animalController from "./controllers/animalController.js";

const routes = Router();

routes.use(homeController);
routes.use('/auth', authController);
routes.use('/animal', animalController);

routes.get('/*splat', (req, res) => {
    res.status(404).render('404');
});

export default routes;