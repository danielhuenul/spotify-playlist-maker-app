import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { useLogin } from '../../../hooks/useLogin';
import "./loading.css"

const Loading = () => {
  const [ params ] = useSearchParams();
  const code = params.get("code") || "";
  const redirect_uri = window.location.href.split("?")[0];
  useLogin({ code, redirect_uri });

  return (
    <div className='main'>
      <div className="loading">
        <span className="blob1 blob"></span>
        <span className="blob2 blob"></span>
        <span className="blob3 blob"></span>
      </div>
    </div>
  )
}

export default Loading
