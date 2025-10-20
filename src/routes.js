import { Router } from "express";
import homeController from "./controllers/homeController.js";

const routes = Router();


routes.use(homeController);


routes.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

routes.get('/login', (req, res) => {
    res.render('login')
});

routes.get('/register', (req, res) => {
    res.render('register')
});

routes.get('/*splat', (req, res) => {
    res.status(404).render('404');
});

export default routes;