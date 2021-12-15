const passport = require("passport")
const jwtStrategy = require("passport-jwt").Strategy
const extractJwt = require("passport-jwt").ExtractJwt
import User from "../models/User"

 
export default passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETORKEY
}, (payload: any, done: any) => {
    User.findOne({_id: payload._doc._id})
    .then((res: any) => {
        if (!res) {
            return done(null, false)
        }else {
            return done(null, res)
        }
    })
    .catch((error: Error) => done(error, false))
}))