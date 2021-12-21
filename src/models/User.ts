const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String},
        git: {type: String},
        linkedin: {type: String},
        strength: {type: Array},
        degree: {type: String},
        technologies: {type: Array},
        description: {type: String},
        photo: {type: String},
        type: String
    }
)

const User = mongoose.model("user", UserSchema)

export default User