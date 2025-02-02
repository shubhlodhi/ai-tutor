import "bootstrap/dist/css/bootstrap.min.css";
import "./feat.css"
import print from "./../images/Board-Game-Start.jpg"
import prints from "./../images/OIP (1).jpeg"
// v
import printss from "./../images/OIP (2).jpeg"
import printsss from "./../images/OIP (3).jpeg"
import printssss from "./../images/OIP (4).jpeg"
import printsssss from "./../images/OIP (5).jpeg"
import printssssss from "./../images/Moving-Out_20200422154713-2-scaled.webp"
function Fetaures(){
    return (
        <>
        <h1>Learn the Basics of python</h1>
        <div className="feat">
        {/* <button>Hello World</button> */}
        <button  type="button" class="btn btn-primary"><a href="https://learnpython.org/en/Hello%2C_World%21">Hello World</a></button>
<button type="button" class="btn btn-secondary"><a href="https://learnpython.org/#google_vignette">Variables and Types</a></button>
<button type="button" class="btn btn-success"><a href="https://learnpython.org/en/Lists">List</a></button>
<button type="button" class="btn btn-danger"><a href="https://learnpython.org/en/Basic_Operators">Basic Operators</a></button>
<button type="button" class="btn btn-warning"><a href="https://learnpython.org/en/String_Formatting">String Formatting</a></button>
<button type="button" class="btn btn-info"><a href="https://learnpython.org/en/Basic_String_Operations">Basic String Operations</a></button>
<button type="button" class="btn btn-light"><a href="https://learnpython.org/en/Conditions">Conditions</a></button>
<button type="button" class="btn btn-dark"><a href="https://learnpython.org/en/Loops">Loops</a></button>
<button type="button" class="btn btn-secondary"><a href="https://learnpython.org/en/Functions">Functions</a></button>
<button type="button" class="btn btn-success"><a href="https://learnpython.org/en/Classes_and_Objects">Classes and Objects</a></button>
<button type="button" class="btn btn-danger"><a href="https://learnpython.org/en/Modules_and_Packages">Basic Operators</a></button>
<button type="button" class="btn btn-warning"><a href="https://learnpython.org/en/Input_and_Output">Dictionary</a></button>

{/* <button type="button" class="btn btn-link">Link</button> */}
</div>
{/* <div className="games"> */}
    <h1>Coding games For Kids</h1>
    <div className="cardss">
            <div className="cardflex">
           <a href="https://codingforkids.io/en/play/python/intro-level1"> <img src={print} alt="" /></a>
           <a href="https://codingforkids.io/en/play/python/intro-level2"><img src={prints} alt="" /></a> 
           <a href="https://codingforkids.io/en/play/python/intro-level3">  <img src={printss} alt="" /></a> 
           <a href="https://codingforkids.io/en/play/python/intro-level4"> <img src={printsss} alt="" /></a> 
           <a href="https://codingforkids.io/en/play/python/intro-level5">  <img src={printssss} alt="" /></a> 
           <a href="https://codingforkids.io/en/play/python/intro-level6">  <img src={printsssss} alt="" /></a> 
           <a href="https://codingforkids.io/en/play/python/intro-level7"> <img src={printssssss} alt="" /></a> 
           {/* <a href=""> <img src={printssssss} alt="" /></a>  */}
            </div>
            </div>
{/* </div> */}

        </>
    )
}
export default Fetaures