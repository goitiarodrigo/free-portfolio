import axios from "axios"


const githubControllers = {
 getProfileGit: async (req: any, res: any) => {
    try {
      const response = await axios.post(
        `https://github.com/login/oauth/access_token/?client_id=cd6173a77b378f016cdc&client_secret=50d27d9328db5e0900317b05fafe8164db2d53da&code=${req.body.authCode}`
      )
      const link = new URLSearchParams(response.data)
      let token = Object.fromEntries(link).access_token
      const init = {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
      const { data } = await axios.get('https://api.github.com/user/emails', init)
      const email = data[0].email
      const profileGit = await axios.get('https://api.github.com/user', init)
      const { node_id, name, avatar_url } = profileGit.data
      const allData = {
        fullName: name,
        password: node_id,
        photoProfile: avatar_url,
        email,
      }
      res.json({ success: true, response: allData })
    } catch (err) {
        res.json({ success: false, response: err })
        }
  }
}

export default githubControllers

