import { Router } from "express";
import userService from "../services/userService.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

const authController = Router();

authController.get('/register', isGuest, (req, res) => {
    res.render('auth/register')
});

authController.post('/register', isGuest, async (req, res) => {

    const userData = req.body;

    try {
        // if (userData.password !== userData.rePassword) {
        //     throw new Error('Password and rePassword must match!');
        // }
        const token = await userService.register(userData);
        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        let errorMessage = err.message;

        if (err.name === 'ValidationError') {
            errorMessage = Object.values(err.errors).at(0).message;
        }

        res.status(400).render('auth/register', {
            user: userData.email,
            error: errorMessage
        });

    }

    // if (userData.password === userData.rePassword) {
    //     const token = await userService.register(userData);
    //     res.cookie('auth', token);
    //     res.redirect('/');

    // } else {
    //     res.send(`
    //         <script>
    //             alert('Password and rePassword must match!');
    //             window.location.href = '/auth/register'; // Optionally redirect back to the register page
    //         </script> 
    //         `);
    // }


});

authController.get('/login', isGuest, (req, res) => {
    res.render('auth/login')
});

authController.post('/login', isGuest, async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await userService.login(email, password);
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.status(400).render('auth/login', {
            error: err.message,
            email
        })
    }
});

authController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default authController;