import axios from 'axios'

const spotifyClientAdapter = axios.create({
  baseURL: "https://accounts.spotify.com/api"
})

export default spotifyClientAdapter