import img1 from "./Home-img1.png"
import img2 from "./Home-img2.png"
import part1 from "./cas.png"
import part2 from "./emi_khayr_by_linz7_d5a9xwi-pre.png"
import part3 from "./cidh.png"
import soufyan from "./soufyanpr.png"
import oussama from "./Oussamapr.png"
import ikbi from "./ikbipr.png"
import nabil from "./nabilpr.png"
import facebook from "./facebook.png"
import instagram from "./instagram.png"
import linkdin from "./linkdin.png"
import donation from "./Donation.png"
import Logo from "./coeursolidaire.png"

const Home = () => {
    return ( 
        <div className="homepg">
            <div className="firstpg">
                <h1>Connecting Compassion for Rapid Relief.</h1>
                <h2>Unifying Hearts, Empowering Lives</h2>
                <img src={img1} alt=""/>
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
                <img src={img2} alt=""/>
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
            <div className="clear"></div>
            <div className="fourthpg">
                <div className="parterner">
                    <h1>Our parteners</h1>
                    <ul>
                        <li><img src={part1} alt=""/></li>
                        <li><img src={part2} id="part" alt=""/></li>
                        <li><img src={part3} alt=""/></li>
                    </ul>
                </div>
                <div className="clear"></div>
                <div className="team">
                    <h1>Meet our team</h1>
                    <ul>
                        <li>
                            <img src={soufyan} className="profile" alt=""/>
                            <p>Soufyan BASSEAID</p>
                            <a href="https://www.instagram.com/soufyan__basseaid/"><img src={instagram} alt=""/></a>
                            <a href="https://www.facebook.com/soufyan.basseaid/"><img src={facebook} alt=""/></a>
                            <a href="https://www.linkedin.com/in/soufyan-basseaid-552a231b5/"><img src={linkdin} alt=""/></a>
                        </li>
                        <li>
                            <img src={oussama} className="profile" alt=""/>
                            <p>Oussama OULDRHILA</p>
                            <a href="https://www.instagram.com/oussamaouldrhila/"><img src={instagram} alt=""/></a>
                            <a href="https://www.facebook.com/oussama.ouldrhila.12"><img src={facebook} alt=""/></a>
                            <a href="https://www.linkedin.com/in/oussama-ouldrhila-6022a1245/"><img src={linkdin} alt=""/></a>
                        </li>
                        <li>
                            <img src={ikbi} className="profile" alt=""/>
                            <p>Abdelilah IKBI</p>
                            <a href="https://www.instagram.com/anzar_ai/"><img src={instagram} alt=""/></a>
                            <a href="https://www.facebook.com/profile.php?id=100072098286627"><img src={facebook} alt=""/></a>
                            <a href="https://www.linkedin.com/in/abdelilah-ikbi-103597283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={linkdin} alt=""/></a>
                        </li>
                        <li>
                            <img src={nabil} className="profile" alt=""/>
                            <p>Nabyl OUCHINE</p>
                            <a href="https://instagram.com/na__bil__ou?igshid=NzZlODBkYWE4Ng=="><img src={instagram} alt=""/></a>
                            <a href="https://www.facebook.com/profile.php?id=100019437854452&mibextid=2JQ9oc"><img src={facebook} alt=""/></a>
                            <a href="https://www.linkedin.com/in/nabyl-ouchine-503649291"><img src={linkdin} alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="clear"></div>
            <div className="fifthpg">
                <img src={donation} alt="" />
                <img src={Logo} alt="" id="logo"/>
                <div className="info">
                    <h2>LOCATION</h2>
                    <p>av Allal EL Fassi - Madinat AL
                        Irfane - Rabat - MAROC</p>
                    <h2>FOLLOW US ON</h2>
                    <ul>
                        <li><a href="/"><img src={instagram} alt=""/></a></li>
                        <li><a href="/"><img src={facebook} alt=""/></a></li>
                        <li><a href="/"><img src={linkdin} alt=""/></a></li>
                    </ul>
                    
                   <a href="/" id="email">contact@coeursolidaire.ma</a>

                   <p id="copywrite">© 2024 CoeurSolidaire- All Rights Reserved</p>

                </div>
                
            </div>
        </div>
        
       
     );
}
 
export default Home;