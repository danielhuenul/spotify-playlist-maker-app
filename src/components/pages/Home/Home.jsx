import "./home.css"
import wall01 from '../../../assets/wall01.jpg'
import clientAdapter from "../../../service/adapters/client.adapter"

const Home = () => {

  const handleLogin = async () => {
    const response = await clientAdapter.get("/login")
    console.log("🚀 ~ response.data", response.data)
    localStorage.setItem("simpleToken", response.data.simpleToken)
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