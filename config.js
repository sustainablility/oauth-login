exports.listenOnPort = 9999;
exports.getOauthTokenUrl = "http://127.0.0.1:8888/backend/oauthLoginReturnOauthToken";

// Testing URL: https://github.com/login/oauth/authorize?client_id=5171562b9c80c6c528f0&scope=user:email
exports.oauthInfo = {
    github: {
        client_id: "5171562b9c80c6c528f0",
        client_secret: "65d6a6dfa0e91ed1c66b37536da684bde0695c31"
    }
};

exports.oauthURL = {
    github: {
        token: 'https://github.com/login/oauth/access_token',
        userInfo: "https://api.github.com/user"
    }
};