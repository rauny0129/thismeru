import React, { useState } from 'react';
import jpg2 from './image/2.jpg'
import jpg3 from './image/3.jpg'
import jpg4 from './image/4.jpg'
import jpg5 from './image/5.jpg'
import jpg6 from './image/6.jpg'
import jpg7 from './image/7.jpg'
import jpg8 from './image/8.jpg'
import jpg9 from './image/9.jpg'
import jpg10 from './image/10.jpg'
import jpg11 from './image/11.jpg'
import jpg12 from './image/12.jpg'
import { Button } from 'react-bootstrap';

const RedirectButton = ({handleJpg, handleMent, handleShow}) => {

  const [exit, setExit] = useState('나가기');

  const sad = () => {
    const ran = Math.floor(Math.random() * 3);
    if(ran===0){
      handleJpg(jpg3)
    }else if(ran===1){
      handleJpg(jpg4)
    }else if(ran===2){
      handleJpg(jpg5)
    }
    handleMent('HiMERU가 슬퍼합니다.')
  }

  const happy = () => {
    const ran = Math.floor(Math.random() * 2);
    if(ran===0){
      handleJpg(jpg10)
    }else if(ran===1){
      handleJpg(jpg11)
    }
    handleMent('HiMERU와 함께 행아웃으로 이동합니다.')
  }

  const move = () => {
    happy();
    handleShow(false);
    setTimeout(() => {
      window.location.replace("https://hangouts.google.com/call/16DvVB6yAYalRfg9bffUACEM");
    },1000);
  }

  const end = () => {
    handleMent('HiMERU가 빡쳤습니다.');
    handleJpg(jpg6);
    if(exit==='정말로?'){
      handleJpg(jpg9);
      handleMent('HiMERU가 찾아옵니다.');
      handleShow(false);
      setTimeout(() => {
        handleJpg(jpg8);
        handleMent('')
        setTimeout(() => {
          window.location.reload();
        },500);
      },1500);
    }
    setExit('정말로?');
  }


  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="secondary" 
          onMouseOver={()=>{handleJpg(jpg12); handleMent('HiMERU가 사랑합니다.');}}
          onMouseOut={()=>{sad()}}
          onClick={()=>{move()}} 
          style={{width: '140px', height: '60px', marginRight: '5%', fontSize:"20px"}}>행앗하기</Button>
        <Button variant="secondary" 
          onMouseOver={()=>{handleJpg(jpg7);  handleMent('HiMERU가 화났습니다.');}}
          onMouseOut={()=>{handleJpg(jpg2);  handleMent('HiMERU가 기뻐합니다.'); setExit('나가기')}}
          onClick={()=>{end()}} 
          style={{width: '140px', height: '60px', marginLeft: '5%', fontSize:"20px"}}>{exit}</Button>
      </div>
    </div>
  );
};

export default RedirectButton;