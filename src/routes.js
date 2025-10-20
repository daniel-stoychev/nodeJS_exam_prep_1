import { Router } from "express";
import homeController from "./controllers/homeController.js";
import authController from "./controllers/authController.js";

const routes = Router();


routes.use(homeController);
routes.use('/auth', authController);




routes.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

routes.get('/*splat', (req, res) => {
    res.status(404).render('404');
});

export default routes;