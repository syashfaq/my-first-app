import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Button from './Button';
import AvatarProfile from './AvatarProfile';
import { useEffect, useState } from 'react';
import ProfileNew from './AvatarNew.js'

function App() {
  const [changeSize,setChangeSize]=useState(100);
  useEffect(()=>{
    setTimeout(() => {
      setChangeSize(300);
    }, 7000);
  },[])

  return (
    <div className="App">
      <h1>Sayyed Ashfaq</h1>
      {/* <Button counter=  {1}/>
      <Button counter=  {2}/>
      <Button counter=  {5}/>
      <Profile/>
      <AvatarProfile 

      person={{name:"Sayyed",
      imageId:"1bX5QH6"}} 
      size ={changeSize}
      />
      <AvatarProfile person={{name:"Sayyed",imageId:"1bX5QH6"}} size ={100}/>
      <AvatarProfile person={{name:"Sayyed",imageId:"1bX5QH6"}} size ={changeSize  }/> */}
      <ProfileNew/>
      
    </div>
  );
}

export default App;
