
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
  </section>
  
    
  );
}

export default Homepage;