import React, { useContext, useEffect, useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../Context';
import { createPlaylist } from '../../../service/spotify.service';
import Swal from 'sweetalert2'
import './maker.css'

const defaultForm = { filters: "", name: "", description: "" }
const Maker = () => {
  const navigation = useNavigate();
  const [ context ] = useContext(Context);
  const [ form, setForm ] = useState(defaultForm);
  const mutation = useMutation(currentForm => {
    return createPlaylist(currentForm)
  }, {
    onError: () => {
      Swal.fire('Error', 'Playlist dont saved!', 'error')
    },
    onSuccess: () => {
      Swal.fire('Succes', 'Playlist saved!', 'success')
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const { filters, name, description } = form
    if (!filters || !name || !description) {
      return Swal.fire('Error', 'Complete form!', 'error')
    }

    mutation.mutate({
      filters: form.filters,
      userId: context.auth.id,
      playlist: {
        name: form.name,
        description: form.description,
        public: true
      }
    })
  }

  const handleChangeInput = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  useEffect(() => {
    if (!context?.auth?.id) {
      localStorage.clear();
      sessionStorage.clear();
      navigation("/home");
    }
  }, [context?.auth?.id])

  return (
    <div className='main gradient'>
      <h2>¡Hola {context?.auth?.display_name}. Comienza a crear!</h2>
      <div className="container">
        <form className='formPlaylist' autoComplete='off' onSubmit={handleSubmit}>
          <div className="c1">
            <input
              type="text"
              name='name'
              onChange={ handleChangeInput }
              placeholder='Nombre de lista de reproduccion'
            />
            <input
              type="text"
              name='description'
              onChange={ handleChangeInput }
              placeholder='Descripcion'
            />
          </div>
          <div className="c2">
            <textarea
              name="filters"
              cols="30"
              rows="15"
              onChange={ handleChangeInput }
              placeholder='Tags'
            ></textarea>
          </div>
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  )
}

export default Maker