

export  interface newUser {
      email: string,
      password?: string,
      fullName: string,
      photoProfile?: string,
      _id?: string,
      git?: string,
      linkedin?: string,
      strength?: string[],
      degree?: string,
      technologies?: string[],
      description?: string,
      token?: string,
      messages?: string[]
  }

export const initialState = {
  email: "",
  password: "",
  fullName: "",
  photoProfile: "",
  _id: "",
  git: "",
  linkedin: "",
  strength: [],
  degree: "",
  technologies: [],
  description: "",
  token: "",
  messages: []
}
    
    


