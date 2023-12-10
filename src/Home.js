import img1 from "./Home-img1.png"

const Home = () => {
    return ( 
        <div className="firstpg">
            <h1>Connecting Compassion for Rapid Relief.</h1>
            <h2>Unifying Hearts, Empowering Lives</h2>
            <img src={img1} />
            <button>CONTRIBUTE</button>
        </div>
     );
}
 
export default Home;