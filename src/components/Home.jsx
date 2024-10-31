import "./Home.css";
import image1 from "./image1.png";

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h3>Shoes Art</h3>
          <h1>Find the way forward for your business</h1>
          <p>
            From trendy kicks to custom designs, 
            explore ShoesArt store examples and get inspired to step up your online presence.
          </p>
          <button className="shop-btn" onClick={() => window.location.href = '/Contact'}>Shop Now</button>
        </div>
        <div className="image-grid">
          <img  className="image1" src={image1} alt="Shoes" />
        </div>
      </div>
    </div>
  );
}
