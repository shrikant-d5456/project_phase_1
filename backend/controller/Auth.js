import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register =  async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const checkuser = await User.findOne({ username });

        if (checkuser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({ username, email, password } );

        const salt = await bcrypt.genSalt(10);

        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();


        jwt.sign(
            { id: newUser._id }, "hello", { expiresIn: 3600 }, 
            (err, token) => 
            {
            if (err) 
                throw err;

            res.json({ 
                token,
                msg :"user registred",
                data:newUser 
                });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const login =  async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send({ msg: 'invalid email' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ msg: 'Invalid password' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).send({
            msg: 'Login successful',
            token,
            id:user._id,
            username:user.username
        });

    } catch (err) {
        res.status(500).send({
            msg: 'Error while logging in',
            error: err.message
        });
    }
};

export const logout =  (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).send({
            msg: 'Logout successful'
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            msg: 'Error while logging out',
            error: err.message
        });
    }
    
    
};

