import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { generaToken } from '../../../service/spotify.service'


const Maker = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, error, data } = useQuery('generaToken', () =>
    generaToken({
      code: searchParams.get("code"),
      redirect_uri: window.location.href.split("?")[0]
    })
  )


  console.log("🚀 ~ data", data.access_token)
  console.log("🚀 ~ error", error)
  console.log("🚀 ~ isLoading", isLoading)


  return (
    <div>Maker</div>
  )
}

export default Maker