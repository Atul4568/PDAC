import{BrowserRouter, Routes,Route} from "react-router-dom";
import {Home} from "./components/home/Home"
import { CustomerList } from "./components/customer/CustomerList";
import {Support} from"./components/support/Support";
import {Nav} from "./components/navbar/Nav";
import { ProductList } from "./components/product/ProductList";
import { Greet } from "./components/greet/Greet";
import { UserList } from "./components/user/UserList";
import { TodoList } from "./components/todo/TodoList";
import { CommentList } from "./components/comments/CommentList";
import { AllUserList } from "./components/AllUserList";

import "./components/Common.css"
import { DeviceList } from "./components/DeviceList";
// import { Posts } from "./components/Posts/Posts";



function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/greet" element={<Greet/>}/>
        <Route path="/customer" element={<CustomerList/>}/>
        <Route path="/Support" element={<Support/>}/>
        <Route path="/Product" element={<ProductList/>}/>
        <Route path="/Users" element={<UserList/>}/>
        <Route path="/Todo" element={<TodoList/>}/>
        <Route path="/Comment" element={<CommentList/>}/>
        <Route path="/allusers" element={<AllUserList/>}/>
        <Route path="/devices" element={<DeviceList/>}/>
        {/* <Route path="/Post" element={<Posts/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
