import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
   const { JWT_SECRETE_KEY} = process.env;
   if(!JWT_SECRETE_KEY) throw new Error("JWT_SECRETE_KEY is not configured")

   const token = jwt.sign({ userId }, JWT_SECRETE_KEY, { expiresIn: '7d' });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,                 // 7 days
        httpOnly: true,                                  //prevents XSS(Cross-Site Scripting) attacks
        sameSite: "strict",                               // CSRF Only send cookie to same domain
        secure: process.env.NODE_ENV === "development" ? false : true,   // Only set cookie over HTTPS in production
    })
    return token;
};