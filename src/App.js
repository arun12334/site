import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Home from "./Pages/home";
import About from "./Pages/about";
import Help from "./Pages/help";
 import Service from "./Pages/service"; 
 import Contact from "./Pages/contact";
 
  


function App() {
  return (
      <div>
<BrowserRouter>
<Routes>
 <Route exact path="/"  index element={<Home />}/>
 <Route   path="/about"  index element={<About />}/>
 <Route   path="/help"  index element={<Help />}/>
 <Route  path="/service"  index element={<Service />}/>
 <Route  path="/contact"  index element={<Contact />}/>
</Routes>
</BrowserRouter>

 


      </div>    
     
  );
}

export default App;
