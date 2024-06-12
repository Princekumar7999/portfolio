
import "./homep.css"
import img from './me.png'
function Homepage(){
  return (
    
    <section className="homepage">
    <div className="section-left"></div>
    <div className="section-right text-2xl">
      <h1>Web developer</h1>
      <p>This is the home page of my portfolio.</p>
    </div>
    <div className="image-container">
    <img className="me" src={img} alt="Description of Image"></img>

    </div>
    <div className="social-media-icons">
        <a href="https://www.youtube.com/channel/UC2Gjpewc8-yT2LTv3vG6UWA" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.linkedin.com/in/prince-kumar-39b444279/" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
  </section>
  
    
  );
}

export default Homepage;