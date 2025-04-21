import { useState } from "react"

export default function State() {
    // use stat is a function of react used to handle stat.UseState hook function of react return an array with 2 argument one is value another one is a function
    let [count,alterCount] = useState(0);
    function increaseValue(){
        const newCount = count+1;
        alterCount(newCount);
    }
    function DecreaseValue(){
        const newCount = count-1;
        alterCount(newCount);
    }
    return (

        <>
            <div style={{ border:"1px solid purple",padding:"10px"}}>   
                <h3>Counter: {count} </h3>
                <button onClick={increaseValue}>Increase</button>
                <button onClick={DecreaseValue}>Decrease</button>
            </div>

        </>
    )
}