import {useState} from "react"
function Button(props) {
    const [counter,setCounter]= useState(props.counter)
    const handleOnClick =  ()=>{
        console.log("test button event run");
        setCounter(counter + props.counter);
        console.log("The value of counter :",counter);
    }
    return (
        <button onClick = {handleOnClick}>Test {counter}</button>
    )
};
export default Button