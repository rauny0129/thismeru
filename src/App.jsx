import React, { useEffect, useState } from 'react';
import jpg0 from './image/0.jpg'
import jpg1 from './image/1.jpg'
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


const App = (props) => {

  const [jpg, setJpg] = useState();
  const [ment, setMent] = useState();
  const [show, setShow] = useState(true);
  const [exit, setExit] = useState('나가기');


  useEffect(() =>{
    const ran = Math.floor(Math.random() * 2);
    if(ran===0){
      setJpg(jpg0)
    }else if(ran===1){
      setJpg(jpg1)
    }
    setMent('HiMERU가 인사합니다.')
  },[setJpg])


  const sad = () => {
    const ran = Math.floor(Math.random() * 3);
    if(ran===0){
      setJpg(jpg3)
    }else if(ran===1){
      setJpg(jpg4)
    }else if(ran===2){
      setJpg(jpg5)
    }
    setMent('HiMERU가 슬퍼합니다.')
  }

  const happy = () => {
    const ran = Math.floor(Math.random() * 2);
    if(ran===0){
      setJpg(jpg10)
    }else if(ran===1){
      setJpg(jpg11)
    }
    setMent('HiMERU와 함께 행아웃으로 이동합니다.')
  }

  const move = () => {
    happy();
    setShow(false);
    setTimeout(() => {
      window.location.replace("https://hangouts.google.com/call/16DvVB6yAYalRfg9bffUACEM");
    },1500);
  }

  const end = () => {
    setMent('HiMERU가 빡쳤습니다.');
    setJpg(jpg6);
    if(exit==='진짜 나가기?'){
      setJpg(jpg9);
      setMent('HiMERU가 찾아옵니다.');
      setShow(false);
      setTimeout(() => {
        setJpg(jpg8);
        setMent('')
        setTimeout(() => {
          window.location.reload();
        },500);
      },1500);
    }
    setExit('진짜 나가기?');
  }


  return(
    <div style={{width: '100%', height: '100%'}}>
      <div style={{display: 'flex',justifyContent: 'center', paddingTop: '30px'}}>
        <img src={jpg} 
          style={{borderRadius: '30px', border: 'solid 5px lightGray', maxWidth:'1000px'}} 
          width='70%'/>
      </div>
      <div style={{display: 'flex',justifyContent: 'center', marginTop: '30px'}}>
        <span style={{fontSize:"25px"}}>
          {ment}
        </span> 
      </div>
      { show &&     
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
          <Button variant="secondary" 
            onMouseOver={()=>{setJpg(jpg12); setMent('HiMERU가 존나 기뻐합니다.');}}
            onMouseOut={()=>{sad()}}
            onClick={()=>{move()}} 
            style={{width: '150px', height: '60px', marginRight: '5%', fontSize:"20px"}}>행앗하기</Button>
          <Button variant="secondary" 
            onMouseOver={()=>{setJpg(jpg7);}}
            onMouseOut={()=>{setJpg(jpg2);  setMent('HiMERU가 기뻐합니다.'); setExit('나가기')}}
            onClick={()=>{end()}} 
            style={{width: '150px', height: '60px', marginLeft: '5%', fontSize:"20px"}}>{exit}</Button>
        </div>
      }   
    </div>
  )
};

export default App;