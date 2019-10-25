let request = require('request-promise');
let encryption = require('../microservice-communication-encryption/index');
let config = require('../config');

/**
 * Handle the data from github and return a token
 * @param data
 * @returns {Promise<string>}
 */
async function forGithub(data) {
    let response = await request({
        uri: config.getOauthTokenUrl,
        qs: {
            id: encryption.encrypt("github" + data.id),
            email: encryption.encrypt(data.email)
        },
        headers: {
            'User-Agent': 'Sustainablility'
        }
    });
    if (response === undefined) {
        return null;
    }
    let token = encryption.decrypt(response);
    if (token === null) {
        return null;
    }
    return token;
}
module.exports = forGithub;