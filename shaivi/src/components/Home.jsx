import '../styles/Home.css';
import { useEffect, useState } from 'react';
import Typer from "./Typer";
import BlinkingCursor from './BlinkingCursor';


function Home(){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const[myName, setMyName] = useState("SHAIVI GANDHI");  
    const[numRenders, setNumRenders] = useState(0);

    useEffect(() => {
      const name = "SHAIVI GANDHI";
      const interval1 = setInterval(() => {
        if (numRenders <= 13) {

            const newF = myName.split("").map((l,i) => {
                if(i < numRenders){
                    
                    return name[i];
                }
                return characters[Math.floor(Math.random() * 26)];

            }).join("");

            setMyName(newF);
      
            setNumRenders(prevFRenders => prevFRenders + 1/3);
          }
      }, 30)
      return  () => clearInterval(interval1);
    }, [numRenders]);
    
    return(
        <div className='home-container' id="Home"> 

            <h2 className='intro'>Hi, I'm</h2>          
            <h1 renders = {numRenders} className='name'>{myName}<BlinkingCursor/></h1>

            <button className='mail-button'>
                <a href="mailto:shaivigandhi@yahoo.com">
                Say Hi 
                </a>
            </button>  
                    
       </div>
    );
}

export default Home;