const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        fullName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String},
        git: {type: String},
        linkedin: {type: String},
        strength: [{type: Array}],
        degree: {type: String},
        technologies: [{type: Array}],
        description: {type: String},
        photoProfile: {type: String},
        visits: [
            { default: 0,
                visit: {type: Number}
            }
        ],
        downloadedCv:  Number,
        allScores: [
           {
                score: {type: Number}
           }
        ],
        messages: [
            {
                message: { type: String},
                email: {type: String},
                fullName: {type: String},
                date: {type: String}
            }
        ] 
    })

const User = mongoose.model("user", UserSchema)

export default User