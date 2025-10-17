import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home')
});

routes.get('/dashboard', (req, res) => {
    res.render('dashboard')
});

routes.get('/search', (req, res) => {
    res.render('search')
});

routes.get('/*splat', (req, res) => {
    res.status(404).render('404');
});

export default routes;