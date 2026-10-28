import one from "../images/one.jpg"
import two from "../images/two.jpg"
import three from "../images/three.jpg"
function Product() {
  return(
     <div class="products">
          
            <div className="box">
              
                        <img src={one}/>
                        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
            </div>
                  
            
            <div className="box">
                <img src={three} alt="villain"/>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
            </div>
            <div className="box">
                <img src={two} alt="Designs Club"/>
                <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
            </div>

           
            
        </div>
  )
}
export default Product