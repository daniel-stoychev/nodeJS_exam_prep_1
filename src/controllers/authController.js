import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.get('/login', (req, res) => {
    res.render('auth/login')
});

authController.get('/register', (req, res) => {
    res.render('auth/register')
});

authController.post('/register', async (req, res) => {

    const userData = req.body;

    if (userData.password === userData.rePassword) {
        await userService.register(userData);
        res.redirect('/');

    } else {
        res.send(`
            <script>
                alert('Password and rePassword must match!');
                window.location.href = '/auth/register'; // Optionally redirect back to the register page
            </script> 
            `);
    }


});

export default authController;