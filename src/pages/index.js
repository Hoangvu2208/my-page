import React, { useState } from "react"
import '../styles/main.scss';
import CanvasAnimation from '../components/ThreeAnimation';
import AboutMe from '../components/AboutMe';
import Project from '../components/Project';
import Contact from "../components/Contact";



const IndexPage = () => {
  const [navSelected, setNavSelected] = useState(null);

  return (
    <main>
    <CanvasAnimation />
      <div className="header">
        <h1>Vu Dinh Hoang</h1>
        <h3>Welcome to my page!</h3>
      </div>

      <div className="navigation">
        <button onClick={ () => setNavSelected(AboutMe) }>About</button>
        <button onClick={ () => setNavSelected(Project) }>Products</button>
        <button onClick ={() => setNavSelected(Contact)}>Contact</button> 
      </div>

      <div className={`content-holder ${navSelected ? "show-content" : "" } `}>
        <div className="content-main" >
          <button className="close-btn" onClick={ () => setNavSelected(null) }> CLOSE</button>
          {navSelected}
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Vu Dinh Hoang</title>
