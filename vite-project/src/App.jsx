import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from '../components/navbar'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from '../components/home'
import { usercontext } from '../components/context'
import { datacontext } from '../components/context'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from 'react-router-dom'

// import { useContext } from 'react'
// import { useContext } from 'react'

function App() {
  const url = "https://ai-tutor-l9m5.onrender.com"
  const [count, setCount] = useState(false)
  const [apidata , setapidata] = useState("")
  const [op ,setop] = useState()
  const [progress, setProgress] = useState(0);
  const [isload ,setload] = useState(false)
// const navi  =useNavigate()
  useEffect(() => {
    if (count){
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setload(true); // Show API data when progress reaches 100%
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  
    return () => clearInterval(interval);
  }
  }, [count]);
    

  console.log("jk" , count)
  console.log("apidata" , apidata)
 function closes(){
  setload(false)
  setCount(!count)
  // navigator(0)
  setapidata(" ")
  // navi(0)
  window.location.reload()
  
 }
  // console.log(values)
  return (
    <>
   <datacontext.Provider value={{data:apidata , setapidata}}>
    <usercontext.Provider value={{point:count , setCount}}>
    <BrowserRouter>
    <div className={count == true? "blur" : ""}>
      
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
    {count &&  <div style={{ width: "100px", height: "100px", margin: "20px auto" }} className="content">
           <CircularProgressbar
             value={progress}
             text={`${progress}%`}
             styles={buildStyles({
               textColor: "black",
               pathColor: "blue",
               trailColor: "#ddd",
               width:"20px",
               textSize:"20px",
               strokeWdith:20,
             })} />
 
               


          </div>}
          <div className="response">
         
          <p className={isload && "apidata"}>
            <p>{apidata.slice(0,30)}</p>
          {/* <p>{apidata.slice(25,400)}</p> */}
          {/* <p>{apidata.slice(409,418)}</p> */}
          {/* <p>{apidata.slice(431,2000)}</p> */}
          
          {apidata.slice(25,20000)}
          {/* <p>{apidata.slice(2500,3000)}</p> */}
          {isload && <button onClick={closes} type="button" class="btn btn-light">Close button</button>
}
          

          </p> 
          </div>
          
    </usercontext.Provider>
    </datacontext.Provider>


    </>
  )
}

export default App
