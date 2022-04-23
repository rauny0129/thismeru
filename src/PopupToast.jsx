import React, { useEffect, useState } from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const PopupToast = () => {

  const updateday = new Date(2022, 4, 23);
  
  const [btDay, setBtDay] = useState();

  const [show, setShow] = useState(localStorage.getItem(updateday.toString())?false:true);
  const toggleShow = () => setShow(!show);

  useEffect(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth()+1, now.getDate());
    const btMs = today.getTime() - updateday.getTime();
    setBtDay(btMs/(1000*60*60*24));
  },[setBtDay, updateday])

  return (
    <>
      <ToastContainer className="p-3" position="top-start">
        <Toast show={show} onClose={toggleShow} >
          <Toast.Header>
            <strong className="me-auto">Update thismeru_0.2</strong>
            <small>{btDay} days ago</small>
          </Toast.Header>
          <Toast.Body style={{whiteSpace:'pre-wrap'}}>
            1. 메세지 추가<br/>
            2. 기타 오류 수정
          </Toast.Body>
          <hr style={{color:'lightgray', margin:'0px'}}/>
          <Toast.Body style={{padding:'5px'}}>
            <div style={{display:'flex', justifyContent:'flex-end'}}>
              <span 
                style={{border:'1px solid gray', borderRadius:'5px', padding:'5px', cursor:'pointer'}}
                onClick={()=>{localStorage.clear(); localStorage.setItem(updateday.toString(), true); toggleShow();}}>
                  안볼껀데
              </span>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default PopupToast;