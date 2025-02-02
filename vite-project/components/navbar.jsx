import "./navbar.css"
import pythonimg from "./../images/icons8-python-100.png"
import "bootstrap/dist/css/bootstrap.min.css";
import ai1 from "./../images/ai-tutor.png"
import ai2 from "./../images/icons8-coach-64.png"
import ai3 from "./../images/icons8-ai-chatting-50.png"
import ai4 from "./../images/icons8-jasper-ai-50.png"
import { useState  ,useContext} from "react";
import { datacontext, usercontext } from "./context";
 

function Nav(){
  const [res1  ,setres1]  = useState()
  const [no,setno] = useState(false)
  const [inp , setinp] = useState('')
  const [inputs ,setinputs] = useState("")
  const [togle ,settogle] = useState(false)
  const {setCount} = useContext(usercontext)
  const {setapidata} = useContext(datacontext)
  console.log("aidata" , inputs)
const val = useContext(usercontext)  
  async function tutor1(){
    setCount(true)
    console.log(val)
    const data = await fetch("http://localhost:5100/get1")
    const res = await data.json()
    setapidata(res.message)
    console.log(res)
  
  } 
  async function tutor2(){
    setCount(true)
    console.log(val)
    const data = await fetch("http://localhost:5100/get2")
    const res = await data.json()
    setapidata(res.message)
    console.log(res)
  
  } 
  async function tutor3(){
    setCount(true)
    console.log(val)
    const data = await fetch("http://localhost:5100/get3")
    const res = await data.json()
    setapidata(res.message)
    console.log(res)
  
  } 
  async function tutor4(){
    setCount(true)
    console.log(val)
    const data = await fetch("http://localhost:5100/get4")
    const res = await data.json()
    setapidata(res.message)
    console.log(res)
  
  } 
  async function  AIserach() {
    settogle(!togle)

    const data = await fetch("http://localhost:5100/getinfo" ,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        value:inp
      })
    })
    const res = await data.json()
    setinputs(res.message)
    console.log(res)


    
  }
  function closes(){
    setinputs("")
    settogle(!togle)

  }
    return (
        <>
       
     { <div className={ !togle ? "navbar" :"blur"}>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      {/* <li class="nav-item active"> */}
        <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
      {/* </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        {/* <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a> */}
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0"> */}
      <div className="flexinput">
      {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"> */}
      <input type="text" onChange={(e)=>{setinp(e.target.value)}} placeholder="search with AI" className="form-control mr-sm-2" />
      <button onClick={AIserach} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    {/* </form> */}
    <div className="aichat">
    <img onClick={tutor1} src={ai1} alt="" />
    <img onClick={tutor2} src={ai2} alt="" />
    <img onClick={tutor3} src={ai3} alt="" />
    <img onClick={tutor4} src={ai4} alt="" />
    <h3>Ai Tutors</h3>
   
    </div>
  </div>
</nav>
     </div>}
     {togle &&<div className="content">
      <p>...loading</p>
     {inputs}
     <button onClick={closes} className="btn btn-danger">close button</button>
     </div>}
        
        </>
    )
}
export default Nav