const jwt = require("jsonwebtoken")

function asureAuth(req, res, next) {
    if(!req.headers.authorization){
        res.status(403).send({msg: "La peticion no tiene la cabecera de autenticacion"})
    }

    const token = req.headers.authorization.replace("Bearer", "")

    try {
        const playload = jwt.decoded(token)
        console.log(playload);
    } catch (error) {
        return res.status(400).send({msg: "Token invalido"})
    }
}

module.exports = {
    asureAuth
}