import clientAdapter from "./service/adapters/client.adapter";
import { apiSpotifyClient } from "./service/adapters/spotifyClient.adapter";

apiSpotifyClient.interceptors.request.use((config) => {
  config.headers.token = `Bearer ${sessionStorage.getItem("access_token")}`;
  return config;
});

clientAdapter.interceptors.request.use((config) => {
  config.headers.token = `Bearer ${sessionStorage.getItem("access_token")}`;
  return config;
});