import QueryString from "qs";
import {
  accountSpotifyClient,
  apiSpotifyClient
} from "./adapters/spotifyClient.adapter";

export const generaToken = async ({ code, redirect_uri, grant_type = "authorization_code" }) => {
  try {
    const data = QueryString.stringify({
      code,
      redirect_uri,
      grant_type
    })

    const config = {
      headers: {
        'Authorization': `Basic ${localStorage.getItem("simpleToken")}`,
      },
    }

    const response = await accountSpotifyClient.post("/token", data, config)
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