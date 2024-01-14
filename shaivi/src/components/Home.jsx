import '../styles/Home.css';
import { useEffect, useState } from 'react';

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
            <h1 renders = {numRenders} className='name'>{myName}</h1>   
            <button className='mail-button'><a href="mailto:shaivigandhi@yahoo.com">Send a Message </a></button>      
       </div>
    );
}

export default Home;