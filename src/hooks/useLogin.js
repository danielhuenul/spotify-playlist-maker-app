import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { generaToken } from '../service/spotify.service';

export const useLogin = ({ code }) => {
  const navigate = useNavigate();
  const [ context, setContext ] = useContext(Context);

  const { data } = useQuery(
    'generaToken',
    () => generaToken(code),
    { enabled: !context.auth.id }
  );

  useEffect(() => {
    if(data?.auth?.id) {
      sessionStorage.setItem("access_token", data.authorizationToken.access_token);
      setContext(data);
      navigate("/maker");
    }
  }, [ data?.auth?.id, data?.authorizationToken?.access_token ])

  return {}
}
