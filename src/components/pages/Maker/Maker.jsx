import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useLogin } from '../../../hooks/useLogin'
import './maker.css'

const Maker = () => {
  const [ params ] = useSearchParams();
  useLogin({
    code: params.get("code"),
    redirect_uri: window.location.href.split("?")[0]
  });

  return (
    <div className='main gradient'>
      <h2>¡Comienza a crear!</h2>
      <div className="container">
        <form>
          <div className="firts">
            <input type="text" name='name' placeholder='Nombre de lista de reproduccion' />
            <label htmlFor="public">publica</label>
            <input type="checkbox" name='public' />
          </div>
          <textarea name='description' cols="30" rows="10"></textarea>
        </form>
      </div>
    </div>
  )
}

export default Maker