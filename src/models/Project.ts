const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema(
    {
        title: {type: String, required: true},
        linkGit: String,
        linkProject: String,
        projectPhoto: {type: String, required: true},
        description: {type: String, required: true},
        userId: {type:mongoose.Types.ObjectId, ref: "user"}
    }
)

const Project = mongoose.model("project", ProjectSchema)

export default Project