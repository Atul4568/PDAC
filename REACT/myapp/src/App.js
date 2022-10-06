import{Project} from"./components/Project";
import{SkillSet} from"./components/SkillSet";
import { Department } from "./components/Department";
import{Roles}from"./components/Roles";
import{Services}from"./components/Services";
import {Platforms} from "./components/Platforms";

import"./components/common.css";
function App() {
  return (
  <div className="container">
  <h1>Parent Home</h1>
  <Platforms/>
  <Project/>
  <Department/>
  <Roles/>
  <SkillSet/>
  <Services/>
  </div>
  );
}

export default App;
