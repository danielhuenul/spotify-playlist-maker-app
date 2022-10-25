import QueryString from "qs";
import spotifyClient from "./adapters/spotifyClient.adapter";

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
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }

    const response = await spotifyClient.post("/token", data, config)
    return response.data
  } catch (error) {
    console.error(error)
    return {}
  }
}