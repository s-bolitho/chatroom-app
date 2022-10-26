const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const login = (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

const signup = (req, res) => {
    try {
        const { fullName, username, password } = req.body;

        const userId = crypto.randomBytes(16).toString('hex');

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error });
    }
};

module.exports = { signup, login }