
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
      let st=data.toLowerCase();
      let st2=dataa.toLowerCase().split('');
    
      let cnt=0;
     for(let s of st)
     {
        let ind=st2.indexOf(s)
      if(ind!=-1 )
      {
          cnt++;
          st2.splice(ind,1);
          
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
        {output}
        <h3 data-testid="answer">"Marriage"</h3>
        

        </div>

    )
}

export default Input;