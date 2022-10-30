import clientAdapter from "./adapters/client.adapter";
import { apiSpotifyClient } from "./adapters/spotifyClient.adapter";

export const generaToken = async (code) => {
  try {
    const response = await clientAdapter.post("/token", { code })
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const getMe = async () => {
  try {
    const response = await apiSpotifyClient.get("/me")
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

export const createPlaylist = async (body) => {
  try {
    const response = await clientAdapter.post("/create-playlist", body)
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}
