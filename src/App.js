import React from "react";
import profile from './imgs/profile.png';
import Info from "./components/Info";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className='container'>
      <img className="profile-pic" src={profile}/>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;