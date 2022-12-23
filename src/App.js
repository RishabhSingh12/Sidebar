
import { useState } from 'react';
import './App.css';

function App() {
  const [expandedView, setExpandedView] = useState(false);
  const optionsArray = [{names:"Categories",class:"fa-solid fa-folder"},{names:"Files",class:"fa-regular fa-user"},{names:"Pepper interactions", class:"fa-regular fa-message"},{names:"Compose timeline", class:"fa-solid fa-chart-simple"}, {names:"Navigate pepper", class:"fa-solid fa-location-crosshairs"}, {names:"Help",class:"fa-regular fa-circle-question"}];
  
  const selectionHandler = (e,idx) => {
    // console.log(idx,e)
    setExpandedView(true);
    e.target.classList.add("selected");
    // e.target.classList.remove("options")
    e.target.classList.add("wide")
    

  }

  // const transitionHandler = (e) => {
  //   console.log(e);
  //   e.target.style.transition ="all ease 400ms"
  // }

  const unselectHandler = (e,idx) => {
    setExpandedView(false);
    e.target.classList.remove("wide");
    // e.target.classList.add("options")
    // expandedViewHandler(e,idx);
    e.target.classList.remove("selected");
  }

  return (
    <>
    <div className="container">

      {expandedView ? <div className="sidebar-container">
      <div className="sidebar expanded" >
        <div className="profile-container">
          <div className='profile'> <i class="fa-solid fa-circle-user" ></i>Profile </div>
          <hr/>
        </div>
        
        <div className="options-container" >
          {
            optionsArray.map((ele,idx) => {
              return <div key={idx} className='options' tabIndex={0} onFocus={(e) =>{e.stopPropagation() ;selectionHandler(e,idx)}} onBlur={(e) => {e.stopPropagation() ;unselectHandler(e,idx)}}>
                <p></p>
                <i className={ele.class} style={{marginRight:"10px"}}></i>
                <p>{ele.names}</p>
              </div>
            })
          }
        </div>
        <div className="logout-container">
          <i class="fa-solid fa-right-from-bracket"></i>
          <p>Exit</p>
        </div>
      </div>
    </div>
    :
    <div className="sidebar-container">
      
      <div className="sidebar">
        <div className="profile-container">
          <div className='profile'><i class="fa-solid fa-circle-user"></i></div>
          <hr/>
        </div>
        
        <div className="options-container" >
          {
            optionsArray.map((ele,idx) => {
              return <div className='options' style={{justifyContent:"center"}} key={idx} tabIndex={0} onFocus={(e) =>{selectionHandler(e,idx)}} onBlur={(e) => {e.stopPropagation() ;unselectHandler(e)}}>
                <p></p>
                <i className={ele.class}></i>
              </div>
            })
          }
        </div>
        <div className="logout-container">
          <p><i class="fa-solid fa-right-from-bracket"></i></p>
        </div>
      </div>
    </div>}
    </div>
    </>
  );
}

export default App;
