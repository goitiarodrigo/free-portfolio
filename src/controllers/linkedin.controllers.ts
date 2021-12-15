import axios from "axios"


const linkedinControllers = {
  getToken: async (req: any, res: any) => {
    try {
      var response = await axios.post(
        `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=7857y6gpeq9cr5&client_secret=qMyWlw8wbjEaEUNN&code=${req.body.authCode}&redirect_uri=http://localhost:3000/linkedin/auth`
      )
      res.json({ success: true, response: response.data.access_token })
    } catch (err) {
      res.json({ success: false, response: err })
    }
  },

  getProfile: async (req: any, res: any) => {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=7751rt1ig2ixgz&client_secret=iEh8e6favisdGbt6&code=${req.body.authCode}&redirect_uri=http://localhost:3000/linkedin/auth`
      )
      const init = {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
      const profile = await axios.get("https://api.linkedin.com/v2/me", init)

      const { localizedFirstName, localizedLastName, id } = profile.data

      let profilePhoto = await axios.get(
        "https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))",
        init
      )
      const photo: string =
        profilePhoto.data.profilePicture["displayImage~"].elements[0]
          .identifiers[0].identifier
      const mail = await axios.get(
        "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
        init
      )
      const email = mail.data.elements[0]["handle~"].emailAddress
      const allData = {
        fullName: `${localizedFirstName} ${localizedLastName}`,
        password: id,
        photo,
        email,
      }
      res.json({ success: true, response: allData })
    } catch (err) {
      res.json({ success: false, response: err })
    }
  },
}

export default linkedinControllers

