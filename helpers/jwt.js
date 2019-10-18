const expressJwt = require('express-jwt');
const config = require('config.json');
const userService = require('../controllers/login-ctrl');

module.exports = jwt;

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/routes/authenticate',
            '/routes/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const login = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!login) {
        return done(null, true);
    }

    done();
};