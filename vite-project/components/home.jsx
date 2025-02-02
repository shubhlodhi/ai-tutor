import "./home.css"
import banner from "./../images/OIP.jpeg"
import toy1 from "./../images/playing (1).png"
import toy2 from "./../images/playing.png"

import toy3 from "./../images/playtime.png"

import { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Fetaures from "./feature";
import { usercontext } from "./context"
import { useContext } from "react"
import pythonimg from "./../images/icons8-python-100.png"

function Home(){
    const [state ,setstate] = useState(false)
    const value = useContext(usercontext)
    const {setCount} = useContext(usercontext)
    // console.log("value" , value)
    // useEffect(()=>{
    //   setCount(true)
    // } ,[])

    return(
        <>
        <div className="home">
            <div className="jumbotron">
            <div class="jumbotron">
              <div className="flexstart">
                <img src={pythonimg} alt="" />
  <h1 class="display-4"> <img src={toy2} alt="" />
  <img src={toy3} alt="" />
  <img className="imh" src={toy1} alt="" /></h1>
  </div>
  <div className="li">
  <div className="learn">
  <h3> Welcome</h3>
<p>Welcome to the LearnPython.org interactive Python tutorial.</p>

<p>Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the Python programming language.

You are welcome to join our group on Facebook for questions, discussions and updates.
</p>
<p>

</p>
  {/* <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
  {/* <hr class="my-4"> */}
  {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
 
  </div>
  {/* <img src={pythonimg} alt="" /> */}
 
  {/* <img src={toy2} alt="" /> */}
  {/* <img src={toy3} alt="" /> */}
  </div>
</div>
                {/* <img onClick={()=>{setstate(!state)}} src={banner} alt="" /> */}
                

            </div>
            <div className="intro">
           
            </div>
            <div className="card1">
                
                   
                    { state ?
                    <div className="content">
            <h2>Content on the screen</h2>
  <p>This is some content that appears after clicking the
               image.</p>
          </div>
            :""}
            <Fetaures/>
            <h1>Python Beginner Courses Tutorial</h1>
                    <div className="vedios">
                    <div className="card">
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <iframe width="914" height="514" src="https://www.youtube.com/embed/ERCMXc8x7mc" title="Python Tutorial for Beginners - Full Course (with Notes &amp; Practice Questions)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  <div class="card-body">
    <p class="card-text">Python Tutorial for Beginners - Full Course (with Notes & Practice Questions</p>
  </div>
</div>
<div className="card">
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <iframe width="928" height="522" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  <div class="card-body">
    <p class="card-text">Python Full Course for Beginners.</p>
  </div>
</div>
<div className="card">
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <iframe width="500" height="514" src="https://www.youtube.com/embed/UrsmFxEIp5k" title="Python Tutorial For Beginners in Hindi | Complete Python Course 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <div class="card-body">
    <p class="card-text">Python Tutorial For Beginners in Hindi | Complete Python Course 🔥</p>
  </div>
</div>
                    
                    {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    {/* <iframe width="914" height="514" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="Python Full Course for Beginners" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>

                </div>


        </div>

        {/* <h1>home</h1> */}
        </>
    )
}
export default Home