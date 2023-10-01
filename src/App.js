import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

function App() {

  const [user,setUser]=useState(null);

  const getUser=async()=>{
    try{
        const url='http://localhost:8080/auth/login/success';
        const data=await axios.get(url,{withCredentials:true});
        console.log(data.user._json);
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    getUser();
  },[])
  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
