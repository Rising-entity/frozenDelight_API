const user = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
require("dotenv").config();


exports.signUp = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        //validations remaining

        const customer = await user.findOne({ email: email });
        if (customer) {
            return res.status(400).json({
                success: false,
                message: "user already registered"
            })
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await user.create({ name, email, password: hashedPassword });
        return res.status(200).json({
            success: true,
            message: "user registered succesfully"
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "error in registering user"
        })
    }


}

exports.login = async (req, res) => {

    // validations remaining

    try {
        const { email, password } = req.body;
        const customer = await user.findOne({ email });
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        //verify password
        const match = await bcrypt.compare(password, customer.password);
        if (match) {
            //password matched
            const payload = {
                user_id: customer._id,
                email: email
            }
            const options = { expiresIn: '1h' };
            const token = jwt.sign(payload, process.env.JWT_SECRET, options);
            res.status(200).json({
                success: true,
                token: token,
                message: "token generated succesfully"
            })

        }
        else {
            //password not matched
            res.status(500).json({
                success: false,
                message: "password is incorrect"
            })
        }



    } catch (error) {
        console.log("errro in login");
        console.log(error);
    }

}