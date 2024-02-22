import img1 from "../imgs/Home-img1.png"
import img2 from "../imgs/Home-img2.png"
import part1 from "../imgs/cas.png"
import part2 from "../imgs/emi_khayr_by_linz7_d5a9xwi-pre.png"
import part3 from "../imgs/cidh.png"
import imgli1 from "../imgs/img-li1.png"
import imgli2 from "../imgs/img-li2.png"
import imgli3 from "../imgs/img-li3.png"
import soufyan from "../imgs/soufyanpr.png"
import oussama from "../imgs/Oussamapr.png"
import ikbi from "../imgs/ikbipr.png"
import nabil from "../imgs/nabilpr.png"
import facebook from "../imgs/facebook.png"
import instagram from "../imgs/instagram.png"
import linkdin from "../imgs/linkdin.png"
import donation from "../imgs/Donation.png"
import Logo from "../imgs/coeursolidaire.png"
import { useHistory,Link } from "react-router-dom/cjs/react-router-dom.min"
import { useLinkContext } from '../Context/LinkContext';

const Home = () => {

    const {handleLinkClick} = useLinkContext();
    const history = useHistory()
    const GoToSignIn = (history)=>{
        history.push("/SignIn");
        handleLinkClick(false,false,false,false,false)
    }
    

    return ( 

        <main className="Container">

            <article className="Intoduction" id="home">

                <section className="Intro_Headers">
                    <h1>Connecting Compassion for Rapid Relief.</h1>
                    <h2>Unifying Hearts, Empowering Lives</h2>
                </section>
                
                <figure className="IntroHero">
                    <img src={img1} alt="donation_figure" width="1890" height="1417" />
                </figure>
                
                <button className="Intro_bt" onClick={()=>GoToSignIn(history)}>CONTRIBUTE</button>

            </article>

            <article id="aboutUs" className="AboutUs" >

                <figure className="AbUs_Hero">
                    <img src={img2} alt="Donation Illustrative image" width="559" height="446"/>
                </figure>
                

                <section className="AbUs_Header">

                    <h1>All About CoeurSolidaire</h1>
                    <p>
                        Welcome to CoeurSolidaire, a groundbreaking
                        initiative dedicated to making a meaningful impact
                        during times of crises. Our project is driven by the
                        vision of creating a robust online platform that
                        facilitates the seamless management of donations
                        and collaborations in the face of natural disasters or
                        humanitarian crises.
                    </p>
                </section>
                

                
                <button className="AbUs_bt" onClick={() => alert('Learn more')}>LEARN MORE</button>

            </article>
          

            <article className="Services" id="services">

                <section className="Serv_Header">
                    <h2>CoeurSolidaire Fundraisers in Your Community</h2>
                    <p>Be a driving force for positive change</p>
                </section>

               <section className="Serv_Content">

                    <figure>
                        <Link to="/">  
                            <img src={imgli1} alt="CORPORATE PARTNERSHIP" width="512" height="512" />
                       </Link>
                        <Link to="/"><figcaption>CORPORATE PARTNERSHIP</figcaption></Link>
                    </figure>

                    <figure>
                        <Link to="/">
                            <img src={imgli2} alt="INDIVIDUAL GIVING" width="300" height="300"/>
                       </Link>
                       <Link to="/"><figcaption>INDIVIDUAL GIVING</figcaption> </Link>
                    </figure>

                    <figure>
                        <Link to="/">
                        <img src={imgli3} alt="LOCAL BUSINESS SUPPORT" width="450" height="277"/>
                       </Link>
                       <Link to="/"><figcaption>LOCAL BUSINESS SUPPORT</figcaption> </Link>
                    </figure>
                    
                </section> 
                

                <button className="Serv_bt" onClick={() => alert('View more')}>VIEW MORE</button>
            </article>
            

            <article className="Team_Partner" id="Partner" >

                <section className="TP_Partner">

                    <section className="TP_Partner_Header"><h1>Our parteners</h1></section>

                    <section className="TP_Partner_Logo">
                            <figure><img src={part1} alt="Cas" width="225" height="225"/></figure>
                            <figure><img src={part2} alt="Emi Khayr" width="1048" height="762"/></figure>
                            <figure><img src={part3} alt="Cidh" width="225" height="225"/></figure>
                    </section>

                </section>


                <section className="TP_Team">

                    <section className="TP_Team_Header"><h1>Meet our team</h1></section>

                    <section className="TP_Team_Profiles">
                        <ul>
                            <li>
                                <figure>
                                    <img src={soufyan} className="TP_Team_Profile" alt="Soufyan BASSEAID" width="150" height="150"/>
                                    <figcaption>Soufyan BASSEAID</figcaption>
                                </figure >
                                <section className="TP_Team_SocialLink">
                                    <a href="https://www.instagram.com/soufyan__basseaid/" target="_blank"><img src={instagram} alt="Instagram" width="512" height="512" /></a>
                                    <a href="https://www.facebook.com/soufyan.basseaid/" target="_blank"><img src={facebook} alt="Facebook" width="512" height="512"/></a>
                                    <a href="https://www.linkedin.com/in/soufyan-basseaid-552a231b5/" target="_blank"><img src={linkdin} alt="Linkdin" width="512" height="512"/></a>
                                </section>
                            </li>

                            <li>
                                <figure>
                                    <img src={oussama} className="TP_Team_Profile" alt="Oussama OULDRHILA" width="150" height="150"/>
                                    <figcaption>Oussama OULDRHILA</figcaption>
                                </figure>
                                <section className="TP_Team_SocialLink">
                                    <a href="https://www.instagram.com/oussamaouldrhila/" target="_blank"><img src={instagram} alt="Instagram" width="512" height="512"/></a>
                                    <a href="https://www.facebook.com/oussama.ouldrhila.12" target="_blank"><img src={facebook} alt="Facebook" width="512" height="512"/></a>
                                    <a href="https://www.linkedin.com/in/oussama-ouldrhila-6022a1245/" target="_blank"><img src={linkdin} alt="Linkdin" width="512" height="512"/></a>
                                </section>
                            </li>

                            <li>
                                <figure>
                                    <img src={ikbi} className="TP_Team_Profile" alt="Abdelilah IKBI" width="512" height="512"/>
                                    <figcaption>Abdelilah IKBI</figcaption>
                                </figure>
                                <section className="TP_Team_SocialLink">
                                    <a href="https://www.instagram.com/anzar_ai/" target="_blank"><img src={instagram}  alt="Instagram" width="512" height="512"/></a>
                                    <a href="https://www.facebook.com/profile.php?id=100072098286627" target="_blank"><img src={facebook} alt="Facebook" width="512" height="512" /></a>
                                    <a href="https://www.linkedin.com/in/abdelilah-ikbi-103597283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"><img src={linkdin} alt="Linkdin" width="512" height="512"/></a>
                                </section>
                            </li>

                            <li>
                                <figure>
                                    <img src={nabil} className="TP_Team_Profile" alt="Nabyl OUCHINE" width="512" height="512"/>
                                    <figcaption>Nabyl OUCHINE</figcaption>
                                </figure>
                                <section className="TP_Team_SocialLink">
                                    <a href="https://instagram.com/na__bil__ou?igshid=NzZlODBkYWE4Ng==" target="_blank"><img src={instagram}  alt="Instagram" width="512" height="512"/></a>
                                    <a href="https://www.facebook.com/profile.php?id=100019437854452&mibextid=2JQ9oc" target="_blank"><img src={facebook} alt="Facebook" width="512" height="512"/></a>
                                    <a href="https://www.linkedin.com/in/nabyl-ouchine-503649291" target="_blank"><img src={linkdin} alt="Linkdin" width="512" height="512"/></a>
                                </section>
                            </li>
                        </ul>
                        
                    </section>
                </section>


            </article>
            

            <article className="Contact" id="contact">

                <figure className="Contact_Hero">
                    <img src={donation} alt="donation illustrative image" width="377" height="323"/>
                </figure>

            
                <section className="Contact_info">

                    <figure className="Contact_Logo" >
                        <img src={Logo} alt="logo"/>
                    </figure>

                    <div className="Contact_info_Adress">
                        <h2>LOCATION</h2>
                        <address><span className="nowrap">av Allal EL Fassi</span>-<span className="nowrap">Madinat AL
                            Irfane</span>-<span className="nowrap">Rabat-MAROC</span></address>
                    </div>

                    <div className="Contact_SocialInfo">
                        <h2>FOLLOW US ON</h2>
                        <figure className="Contact_SocialInfo_Link">
                            <a href="/"><img src={instagram} alt="instagram" width="512" height="512"/></a>
                            <a href="/"><img src={facebook} alt="facebook" width="512" height="512"/></a>
                            <a href="/"><img src={linkdin} alt="linkdin" width="512" height="512"/></a>
                        </figure>

                        <p>Email: </p> <a href="/" id="email">contact@coeursolidaire.ma</a>

                    </div>
        
                </section>

                

                <aside id="copywrite">© 2024 CoeurSolidaire- All Rights Reserved</aside>
                
            </article>
            
        </main>
        
       
     );
}
 
export default Home;
