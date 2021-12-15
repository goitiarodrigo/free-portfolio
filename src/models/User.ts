const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String},
        git: {type: String},
        linkedin: {type: String},
        strength: {type: Array},
        degree: {type: String},
        technologies: {type: Array},
        description: {type: String},
        profilePhoto: {type: String}
    }
)

const User = mongoose.model("user", UserSchema)

export default User