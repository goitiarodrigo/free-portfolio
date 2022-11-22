import { ActionType, newUser } from "../data"
const { sessionStorage } = window

export const userReducer = (state: newUser, action: ActionType): newUser => {
    const { fullName, photoProfile, email, visits, downloadedCv, allScores, _id, messages, strength, technologies, degree, description, git, linkedin, versionTemplate } = action.payload.response[action.payload.accessToData]
    switch (action.type) {
        case "SIGN_UP":
            sessionStorage.setItem('token', action.payload.response.token)
            return {
                ...state,
                fullName,
                photoProfile,
                email,
                visits,
                downloadedCv,
                allScores,
                _id,
                messages,
                strength,
                technologies,
                degree,
                description,
                git,
                linkedin,
                versionTemplate,
                token: action.payload.response.token
            }
        case "SIGN_IN":
            sessionStorage.setItem('token', action.payload.response.token)
            return {
                ...state, 
                fullName,
                photoProfile,
                email,
                visits,
                downloadedCv,
                allScores,
                _id,
                messages,
                strength,
                technologies,
                degree,
                description,
                git,
                linkedin,
                versionTemplate,
                token: action.payload.response.token
            }
        case "UPDATE_DATA":
            return {
                ...state, 
                fullName,
                photoProfile,
                email,
                visits,
                downloadedCv,
                allScores,
                _id,
                messages,
                strength,
                technologies,
                degree,
                description,
                git,
                linkedin,
                versionTemplate,
            }
        default:
           return state;
    }
}



