import Header from '@/components/header';
import Footer from '@/components/footer';
const HomePage = () =>{
return (
  <>
  <Header/>
    <div className="parentContainer">
      <div className="childContainer">
        <h1>Welcome TO R D Organic Hair Oils</h1>
    </div>
    <div className="imageContainer"> <img src="oil bottle.jpg" alt="bottle" /></div>
    </div>
    <div><Footer/></div>
    </>
);
}; 
export default HomePage;