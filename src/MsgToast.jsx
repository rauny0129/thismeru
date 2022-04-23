import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import jpg from './image/행앗할래요.gif'

const MsgToast = () => {

  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  useEffect(() => {
    setTimeout(()=>{
      setShow(!show)
    },3000)
  }, [])
  

  const bStyle = {
    height:'33px', 
    width:'155px', 
    border:'none', 
    borderRadius:'7px',
    backgroundColor:'transparent'
  }

  return (
    <>
      <ToastContainer className="p-3" position="bottom-end">
        <Toast show={show} onClose={toggleShow} style={{backgroundColor:'transparent', border:'none'}}>
          <img src={jpg} width="100%" style={{borderRadius:'15px', border: '3px solid black',backgroundColor:'black', padding:'0px'}}/>
          <div style={{position:'absolute', top: '78%', left:'7%'}}>
            <button style={bStyle} onClick={()=>{
              window.location.replace("https://hangouts.google.com/call/16DvVB6yAYalRfg9bffUACEM");
            }}></button>
          </div>
          <div style={{position:'absolute', top: '78%', left:'52.3%'}}>
            <button style={bStyle} onClick={()=>{toggleShow()}}></button>
          </div>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default MsgToast;