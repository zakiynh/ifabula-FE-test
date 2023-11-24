async function auth(req, res, next) {
    const { user_id } = req.headers;
    try {
        if (!user_id != "ifabula") throw { name: 'AuthenticationFailed' };
        next();
    } catch (err) {
        res.status(401).json({ message: "UNAUTHORIZED" });
    }
}

module.exports = auth;