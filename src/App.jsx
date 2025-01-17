import "./App.css";
import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Services from "../src/Pages/Services/Services";
import Gallery from "../src/Pages/Gallery/Gallery";
import Blog from "../src/Pages/Blog/Blog";
import Contact from "../src/Pages/Contact/Contact";
import Menu from "../src/Pages/Menu/Menu";
import Juice from "../src/Pages/Juice/Juice";
import Bitings from "../src/Pages/Bitings/Bitings";
import Mocktail from "../src/Pages/Mocktail/Mocktail";
import Sweets from "../src/Pages/Sweets/Sweets";
import Breads from "../src/Pages/Breads/Breads";
import Dal from "../src/Pages/Dal/Dal";
import Cake from "../src/Pages/Cake/Cake";
import Desserts from "../src/Pages/Desserts/Desserts";
import Pricing from "../src/Pages/Pricing/Pricing";
import Ice_cream from "../src/Pages/Ice_cream/Ice_cream";
import Vegetables from "../src/Pages/Vegetables/Vegetables";
import New_Uploads from "../src/Pages/New_Uploads/New_Uploads";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/juice" element={<Juice/>}/>
          <Route path="/new_uploads" element={<New_Uploads/>}/>
          <Route path="/bitings" element={<Bitings/>}/>
          <Route path="/mocktail" element={<Mocktail/>}/>
          <Route path="/sweets" element={<Sweets/>}/>
          <Route path="/vegetables" element={<Vegetables/>}/>
          <Route path="/breads" element={<Breads/>}/>
          <Route path="/dal" element={<Dal/>}/>
          <Route path="/ice_cream" element={<Ice_cream/>}/>
          <Route path="/cake" element={<Cake/>}/>
          <Route path="/desserts" element={<Desserts/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
