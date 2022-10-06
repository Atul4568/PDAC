import{BrowserRouter, Routes,Route} from "react-router-dom";
import {Home} from "./components/home/Home"
import { CustomerList } from "./components/customer/CustomerList";
import {Support} from"./components/support/Support";
import {Nav} from "./components/navbar/Nav";
import { ProductList } from "./components/product/ProductList";



import "./components/Common.css"
import { Greet } from "./components/greet/Greet";
import { UserList } from "./components/user/UserList";
import { TodoList } from "./components/todo/TodoList";
import { CommentList } from "./components/comments/CommentList";
import Post from "./components/posts/post";
import { OlympicList } from "./components/olympic/OlympicList";


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
        <Route path="/Olympic" element={<OlympicList/>}/>
        <Route path="/Comment" element={<CommentList/>}/>
        <Route path="/Post" element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
