import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Cart} from "./Cart";
import {Shop} from "./Shop";
import { ShopContextProvider } from './ShopContext';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/"  element={<Shop />} />
          <Route path = "/" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
