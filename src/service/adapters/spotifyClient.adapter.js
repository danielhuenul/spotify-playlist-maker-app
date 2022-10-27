import axios from 'axios'

export const accountSpotifyClient = axios.create({
  baseURL: "https://accounts.spotify.com/api",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

export const apiSpotifyClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})
