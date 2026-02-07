import jwt from 'jsonwebtoken'

const userAuth = async (req, res, next) => {

    // this next is used to make the contrller fucntion work after executing req, res part 
    const { token } = req.cookies;

    if (!token) {
        return res.json({ success: false, message: 'not authorized login again' })
    }

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
        if (tokenDecode.id) {

            // this check will help when there would be nothing in the body of the request
            if (!req.body) {
                req.body = {};
            }
            if (req.body) {
                req.body.userId = tokenDecode.id
            }
        } else {
            return res.json({ success: false, message: 'not authorized login again' })
        }
        next();

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export default userAuth;