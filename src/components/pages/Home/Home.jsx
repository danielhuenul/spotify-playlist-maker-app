import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../Context";
import clientAdapter from "../../../service/adapters/client.adapter"
import wall01 from '../../../assets/wall01.jpg'
import "./home.css"

const Home = () => {
  const navigation = useNavigate();
  const [ context ] = useContext(Context);

  const handleLogin = async () => {
    if (!context?.auth?.id) {
      const response = await clientAdapter.get("/login")
      localStorage.setItem("simpleToken", response.data.simpleToken)
      window.location.href = response.data.url
      return
    }

    navigation("/maker");
  }

  return (
    <div className="main">
      <img src={wall01} alt="dj wallpaper" className="background" />
      <h2>Playlist maker</h2>
      <button id="login" onClick={handleLogin}>
        { context?.auth?.id === "" ? "Login in Spotify" : "Go to Maker"}
      </button>
    </div>
  )
}

export default Home