import React, { useEffect, useState } from 'react';
import Header from './Header';
import jpg0 from './image/0.jpg'
import jpg1 from './image/1.jpg'
import MsgToast from './MsgToast';
import RedirectButton from './RedirectButton';


const App = () => {

  const [jpg, setJpg] = useState();
  const [ment, setMent] = useState();
  const [show, setShow] = useState(true);



  useEffect(() =>{
    const ran = Math.floor(Math.random() * 2);
    if(ran===0){
      setJpg(jpg0)
    }else if(ran===1){
      setJpg(jpg1)
    }
    setMent('HiMERU가 인사합니다.')
  },[setJpg])

  const handleMent = (item) => {
    setMent(item);
  }

  const handleShow = (item) => {
    setShow(item);
  }

  const handleJpg = (item) => {
    setJpg(item);
  }


  return(
    <div style={{width: '100%', height: '100%'}}>
      <Header/>
      <div style={{display: 'flex',justifyContent: 'center', paddingTop: '30px'}}>
        <img src={jpg} 
          style={{borderRadius: '30px', border: 'solid 5px lightGray', maxWidth:'700px'}} 
          width='70%'/>
      </div>
      <div style={{display: 'flex',justifyContent: 'center', marginTop: '30px'}}>
        <span style={{fontSize:"25px"}}>
          {ment}
        </span> 
      </div>
      <div style={{display: 'flex',justifyContent: 'center'}}>
        <hr style={{width:'70%', maxWidth:'700px', height: '2px', margin:'30px 0px'}}/>
      </div>
      { show &&     
        <RedirectButton handleMent={handleMent} handleJpg={handleJpg} handleShow={handleShow}/>
      }   
      <MsgToast/>
    </div>
  )
};

export default App;