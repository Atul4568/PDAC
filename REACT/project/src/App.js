import{BrowserRouter, Routes,Route} from "react-router-dom";
import {Nav} from "./components/navbar/Nav";
import { ProductList } from "./components/product/ProductList";
import { WazirxList } from "./components/wazirx/WazirxList";
import { BinanceList } from "./components/Binance/BinanceList";



import "./components/common.css"



function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/Product" element={<ProductList/>}/>
        <Route path="/Binance" element={<BinanceList/>}/>
        <Route path="/Wazirx" element={<WazirxList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
