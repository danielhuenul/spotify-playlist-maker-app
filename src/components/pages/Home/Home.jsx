import "./home.css"
import wall01 from '../../../assets/wall01.jpg'

const Home = () => {
  return (
    <div className="main">
      <img src={wall01} alt="" className="background" />
      <h2>Playlist maker</h2>
    </div>
  )
}

export default Home