import { newUser } from "../data"
const { sessionStorage } = window

export type ActionType = 
   | { type: "SIGN_IN", payload: any }
   | { type: "SIGN_UP", payload: any }
   | {type: "NEW_PROJECT", payload: any}



export const userReducer = (state: newUser, action: ActionType): newUser => {
    const { fullName, photoProfile, email, visits, downloadedCv, allScores, _id, token } = action.payload.response[action.payload.accessToData]
    switch (action.type) {
        case "SIGN_UP":
            sessionStorage.setItem('visits', visits)
            sessionStorage.setItem('fullName', fullName)
            sessionStorage.setItem('photoProfile', photoProfile)
            sessionStorage.setItem('downloadedCv', downloadedCv)
            sessionStorage.setItem('allScores', allScores)
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('_id', _id)
            sessionStorage.setItem('token', token)
            return {
                ...state, 
                fullName,
                photoProfile,
                email,
                visits,
                downloadedCv,
                allScores,
                _id,
                token: action.payload.token
            }
        case "SIGN_IN":
            sessionStorage.setItem('visits', visits)
            sessionStorage.setItem('fullName', fullName)
            sessionStorage.setItem('photoProfile', photoProfile)
            sessionStorage.setItem('downloadedCv', downloadedCv)
            sessionStorage.setItem('allScores', allScores)
            sessionStorage.setItem('email', email)
            sessionStorage.setItem('_id', _id)
            sessionStorage.setItem('token', action.payload.token)
            return {
                ...state, 
                fullName,
                photoProfile,
                email,
                visits,
                downloadedCv,
                allScores,
                _id,
                token: action.payload.token
            }
        default:
           return state;
    }
}



