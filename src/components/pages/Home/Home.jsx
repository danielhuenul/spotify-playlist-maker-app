import "./home.css"
import wall01 from '../../../assets/wall01.jpg'
import clientAdapter from "../../../service/client.adapter"

const Home = () => {

  const handleLogin = async () => {
    const response = await clientAdapter.get("/login");
    window.location.href = response.data.url
  }

  return (
    <div className="main">
      <img src={wall01} alt="" className="background" />
      <h2>Playlist maker</h2>
      <button id="login" onClick={handleLogin}>Login in Spotify</button>
    </div>
  )
}

export default Home