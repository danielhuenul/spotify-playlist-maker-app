 import { apiSpotifyClient } from "./service/adapters/spotifyClient.adapter";

apiSpotifyClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem("access_token")}`;
  console.log("🚀 ~ config.headers", config.headers)
  return config;
});