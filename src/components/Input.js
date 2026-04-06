
import React, { use, useEffect, useState } from "react";
let ans=["Siblings","Friends", "Love", "Affection","Marriage","Enemy"]

const Input=()=>{
    let [data,setData]=useState("");
    let [dataa,setDataa]=useState("");
     let [output,setOutput]=useState("");
     

     

     function handleClick(e){
        e.preventDefault();
      if(data.length<=0 || dataa.length<=0)
      {
          setOutput("Please Enter valid input");
          return;
      }
      let st=data
      let st2=dataa
  
      let cnt=0;
     for(let s of st)
     {
      if(st2.includes(s))
      {
          cnt++;
      }
     }
     let l1=st.length-cnt;
     let l2=st2.length-cnt;
     let sum=(l1+l2)%6;
     setOutput(ans[sum]);
     }
     function clearData(){
        setDataa("");
        setData("")
        setOutput("")
     }
     
     
 
    return (
        <div>
            <form>
        <input data-testid="input1" name="name1" onChange={(e)=>setData(e.target.value)} value={data}></input>
        <input data-testid="input2" name="name2" onChange={(e)=>setDataa(e.target.value)} value={dataa}></input>
         <button data-testid="calculate_relationship" name="calculate_relationship" onClick={handleClick}>Calculate Relationship</button>
    
       
        <button data-testid="clear" name="clear" onClick={clearData}>Clear</button>
        </form>
        <h3 data-testid="answer">{output}</h3>
        

        </div>

    )
}

export default Input;