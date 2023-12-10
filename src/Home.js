import img1 from "./Home-img1.png"
import img2 from "./Home-img2.png"


const Home = () => {
    return ( 
        <div className="homepg">
            <div className="firstpg">
                <h1>Connecting Compassion for Rapid Relief.</h1>
                <h2>Unifying Hearts, Empowering Lives</h2>
                <img src={img1} />
            <button className="blackbt" onClick={() => alert('Contribute')}>CONTRIBUTE</button>
            </div>
         <div className="clear"></div>
         <div className="secondpg">
                <h1>All About CoeurSolidaire</h1>
                <p>Welcome to CoeurSolidaire, a groundbreaking
                    initiative dedicated to making a meaningful impact
                    during times of crises. Our project is driven by the
                    vision of creating a robust online platform that
                    facilitates the seamless management of donations
                    and collaborations in the face of natural disasters or
                    humanitarian crises.</p>
                <img src={img2} />
                <button className="blackbt" onClick={() => alert('Learn more')}>LEARN MORE</button>
         </div>
         <div className="clear"></div>
         <div className="thirdpg">
                <h2>CoeurSolidaire Fundraisers in Your Community</h2>
                <p>Be a driving force for positive change</p>
                <ul>
                    <a href="/"><li id="partnership">CORPORATE PARTNERSHIP</li></a>
                    <a href="/"><li id="ind-giving">INDIVIDUAL GIVING</li></a>
                    <a href="/"> <li id="support">LOCAL BUSINESS SUPPORT</li></a>
                </ul>
                <button className="blackbt" onClick={() => alert('View more')}>VIEW MORE</button>
         </div>
        </div>
        
       
     );
}
 
export default Home;