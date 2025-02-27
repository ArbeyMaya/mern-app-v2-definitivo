const jwt = require("jsonwebtoken")
const { JWT_SECRET_KEY } = require("../constans.js")

function createAccessToken(user){
    const expirationToken = new Date()
    expirationToken.setHours(expirationToken.getHours() + 3)

    const playload = {
        token_type: "access",
        user_id: user._id,
        iat: Date.now(),
        exp: expirationToken.getTime()
    }

    return jwt.sign(playload, JWT_SECRET_KEY)
}

function createRefreshToken(user){
    const expirationToken = new Date()
    expirationToken.getMonth(expirationToken.getMonth() + 1)

    const playload = {
        token_type: "refresh",
        user_id: user._id,
        iat: Date.now(),
        exp: expirationToken.getTime()
    }

    return jwt.sign(playload, JWT_SECRET_KEY)
}

function decoded(token) {
    return jwt.decode(token, JWT_SECRET_KEY, true)
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    decoded
}