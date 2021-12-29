import { newUser } from "../data"

export type ActionType = 
   | { type: "SIGN_IN", payload: any }
   | { type: "SIGN_UP", payload: any }
   | {type: "NEW_PROJECT", payload: any}



export const userReducer = (state: newUser, action: ActionType): newUser => {

    switch (action.type) {
        
        case "SIGN_UP":
            return {
                ...state, 
                fullName: action.payload.newRegisteredUser.fullName,
                photoProfile: action.payload.newRegisteredUser.photoProfile,
                email: action.payload.newRegisteredUser.email,
                visits: action.payload.newRegisteredUser.visits,
                downloadedCv: action.payload.newRegisteredUser.downloadedCv,
                allScores: action.payload.newRegisteredUser.allScores,
                _id: action.payload.newRegisteredUser._id,
                token: action.payload.token
            }
        case "SIGN_IN":
            return {
                ...state, 
                fullName: action.payload.userFound.fullName,
                photoProfile: action.payload.userFound.photoProfile,
                email: action.payload.userFound.email,
                visits: action.payload.userFound.visits,
                downloadedCv: action.payload.userFound.downloadedCv,
                allScores: action.payload.userFound.allScores,
                _id: action.payload.userFound._id,
                token: action.payload.token
            }
    
        default:
           return state;
    }

}



