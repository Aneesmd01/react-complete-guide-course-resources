import { useState } from "react";
export default function UserInput()
{
  const[userInput,setUserInput]=  useState({
        intialInvestment:10000,
        anuualInvestment:1200,
        expectedReturn:6,
        duration:10,
    });

    function HandleChange(inputIdentifier,newValue)
    {
        setUserInput((prevUserInput)=>{
            return{
                ...prevUserInput,
                [inputIdentifier]:newValue
            }
        })

    }
    return
    
    <section id='user-input'>
        <div id='input-group'>
            <p>
                <label>Initial Statement</label>
                <input type="Number" required value={userInput.intialInvestment} onChange={(event)=> HandleChange('intialInvestment',event.target.value)} />
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="Number" required value={userInput.anuualInvestment} onChange={(event)=> HandleChange('anuualInvestment',event.target.value)}/>
            </p>
        </div>
        <div id="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(event)=> HandleChange('expectedReturn',event.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required value={userInput.duration} onChange={(event)=> HandleChange('duration',event.target.value)}/>
            </p>
        </div>

    </section>
    
}
