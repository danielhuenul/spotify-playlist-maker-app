import { useQuery } from "react-query";
import { generaToken } from '../service/spotify.service';

export const useLogin = ({ code, redirect_uri }) => {
  const bearerToken = sessionStorage.getItem("bearerToken");
  const expiresIn = sessionStorage.getItem("expiresIn");

  if (bearerToken && expiresIn) {
    return {
      bearerToken,
      expiresIn
    }
  };

  const { isLoading, data } = useQuery('generaToken', () =>
    generaToken({ code, redirect_uri })
  )

  if (!isLoading) {
    sessionStorage.setItem("bearerToken", data.access_token);
    sessionStorage.setItem("expiresIn", data.expires_in);

    return {
      bearerToken: data.access_token,
      expiresIn: data.expires_in
    }
  }

}
