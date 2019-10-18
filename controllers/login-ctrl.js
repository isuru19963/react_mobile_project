const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Login = require('../models/login-model');
const db = require('../db/index');
const Login = db.Login;

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    const login = await Login.findOne({ username });
    if (login && bcrypt.compareSync(password, login.hash)) {
        const { hash, ...userWithoutHash } = login.toObject();
        const token = jwt.sign({ sub: login.id }, config.secret);
        return {
            ...userWithoutHash,
            token
        };
    }
}

async function getAll() {
    return await Login.find().select('-hash');
}

async function getById(id) {
    return await Login.findById(id).select('-hash');
}

async function create(userParam) {
    // validate
    if (await Login.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const login = new Login(userParam);

    // hash password
    if (userParam.password) {
        login.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // save user
    await login.save();
}

async function update(id, userParam) {
    const login = await Login.findById(id);

    // validate
    if (!login) throw 'User not found';
    if (login.username !== userParam.username && await Login.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(login, userParam);

    await login.save();
}

async function _delete(id) {
    await Login.findByIdAndRemove(id);
}