const express = require("express")
const passport  = require("passport")
import userControllers from "../controllers/user.controllers"
import projectsControllers from "../controllers/project.controllers"
import linkedinControllers from "../controllers/linkedin.controllers"
import githubControllers from "../controllers/github.controllers"

const router = express.Router()

//Api for users
router.route("/user/signup").post(userControllers.signUp)
router.route("/user/signin").post(userControllers.signIn)
router.route("/user/message/:id").put(userControllers.messageAction)
router.route("/user/visit/:id").put(userControllers.visitsAction)
router.route("/user/download/:id").put(userControllers.cvAction)
router.route("/user/score/:id").put(userControllers.scoreAction)
router.route("/user/editprofile/:id").put(userControllers.completeProfile)

//Api for projects
router.route("/project/newproject").post(projectsControllers.newProject)
router.route("/project/editproject/:id").put(projectsControllers.editProject)
router.route("/project/deleteproject/:id").delete(projectsControllers.deleteProject)
router.route("/project/getprojects").get(projectsControllers.getProjects)
router.route("/project/uploadPhoto").post(projectsControllers.uploadPhoto)


//Api for log buttons
router.route('/getToken').post(linkedinControllers.getToken)
router.route('/users/getProfileByLinkedin').post(linkedinControllers.getProfile)
router.route('/users/getProfileByGit').post(githubControllers.getProfileGit)

module.exports = router

