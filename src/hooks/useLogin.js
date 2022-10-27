import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { Context } from "../Context";
import { generaToken, getMe } from '../service/spotify.service';

export const useLogin = ({ code, redirect_uri }) => {
  const [ context, setContext ] = useContext(Context);

  const { data: token } = useQuery('generaToken', () =>
    generaToken({ code, redirect_uri }), {
      enabled: !context?.user?.id
    }
  )

  sessionStorage.setItem("access_token", token?.access_token)
  const { isLoading, data: user } = useQuery('me', getMe, {
      enabled: !!token?.access_token || !context?.user?.id
    }
  )

  useEffect(() => {
    setContext(prev => ({ ...prev, user }))
  }, [isLoading])


  return {}
}
