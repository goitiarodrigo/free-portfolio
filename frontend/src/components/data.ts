


type countVisit = {visit: number, _id: string, month: string}
type countScore = {score: number, _id: string}



export interface newUser {
      email?: string,
      password?: string,
      fullName?: string,
      photoProfile?: string,
      _id?: string,
      git?: string,
      linkedin?: string,
      strength?: string,
      degree?: string,
      technologies?: string[],
      description?: string,
      token?: string,
      messages?: string[],
      visits?: countVisit[],
      downloadedCv?: number,
      allScores?: countScore[],
  }

export type projects = [{
  description: string,
  linkGit: string,
  linkProject: string,
  projectPhoto: string,
  title: string,
  userId: string,
  _id: string}
]
  

export const initialState = {
  email: "",
  password: "",
  fullName: "",
  photoProfile: "",
  _id: "",
  git: "",
  linkedin: "",
  strength: "",
  degree: "",
  technologies: [],
  description: "",
  token: "",
  messages: [],
  visits: [],
  downloadedCv: 0,
  allScores: []
}
    
    


