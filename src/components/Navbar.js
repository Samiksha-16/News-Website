import React from 'react';
import Subscribe from './Subscribe';
const handleClick = () => {
  alert("hello");
}
class Navbar extends React.Component {
    render() { 
        return <div>
<>
  <div className="navigation">
    
    <div className="navbarleft">
      <p>MENU</p>
    

     
      <div className="icons">
      <i className="fa fa-bars" aria-hidden="true" />
        <i className="fa fa-search" aria-hidden="true" />
        <i className="fa fa-bell-o" aria-hidden="true" />
      </div>
      <div className="heading">
        <h1>Bloomberg</h1>
        {/* <button value='general' onClick={(e)=>{console.log(e.target.value)}}>click </button> */}
      </div>
    </div>
    <div className="navbarright">
      <button>
        <i className="fa fa-user-o" aria-hidden="true" /> 
         Sign up
      </button>
      <button onClick={Subscribe}>Subscribe</button>
    </div>
  </div>
  {/* <hr /> */}
  <div className="navigationlist">
    <div className="day">
      <p>
        <b>NEWS</b>
      </p>
    </div>
    
    <ul>
      <li>
        <a href="World">World</a>
      </li>
      <li>
        <a href="Politics">Politics</a>
      </li>
      <li>
        <a href="Bussiness">Bussiness</a>
      </li>
      <li>
        <a href="Tech">Tech</a>
      </li>
      <li>
        <a href="Science">Science</a>
      </li>
      <li> 
        
        <a href="Sports">Sports</a>

      </li>
      <li>
        <a href="Entertainment">Entertainment</a>
      </li>
      <li>
        <a href="Health">Health</a>
      </li>
      <li>
        <a href="Arts">Arts</a>
      </li>
    </ul> 
    <div className="menubox">
      <i className="fa fa-ellipsis-h" aria-hidden="true" />
    </div>
  </div>
  <div className="mainnewsbox">
    <h1>Latest News Headlines</h1>
    
  </div>
  
</>

        </div>
    }
}
 
export default Navbar;