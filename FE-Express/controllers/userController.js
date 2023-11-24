class UserController {
    static async getData(req, res, next) {
        try {
            res.status(200).json({ id:"1", name: "M Zakiy Nurhasyim", description: "I am a Full Stack Developer who has been learned in Hacktiv8. I am a Bachelor of Urban and Regional Planning. \nI am a continuous learner and have interest in technology especially web development. I am a team man, but can also work individually. \nI am interested in becoming a full stack developer and looking for opportunities to gain experience in the developer field. \nMy long-term goal is to become a professional developer who can contribute a lot from the applications that I have made and will make to people" });
        } catch (err) {
            next(err);
        }
    }

    static async login(req, res, next) {
        try {
            const { user_id, password } = req.body;
            if (user_id != "ifabula" || password != "123456") throw { name: 'AuthenticationFailed' };
            res.status(200).json({ user_id: "ifabula", pasword: "123456", scope: "user" });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;