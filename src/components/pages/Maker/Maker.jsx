import React, { useContext } from 'react'
import { Context } from '../../../Context';
import './maker.css'

const Maker = () => {
  const [ context ] = useContext(Context);

  return (
    <div className='main gradient'>
      <h2>¡Hola {context.user.display_name}. Comienza a crear!</h2>
      <div className="container">
        <form className='formPlaylist'>
          <div className="c1">
            <input type="text" name='name' placeholder='Nombre de lista de reproduccion' />
            <label htmlFor="public">publica</label>
            <input type="checkbox" name='public' />
            <input type="text" name='description' />
          </div>
          <div className="c2">
            <textarea name="filters" cols="30" rows="15"></textarea>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Maker