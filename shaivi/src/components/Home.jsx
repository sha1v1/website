import '../styles/Home.css';
import { useEffect, useState } from 'react';

function Home(){
    const characters = "A1B2C3D4E5F6G7H8I9J0K!L@M#N$O%P^Q&R*S<T?U>V/WXYZ";

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
                return characters[Math.floor(Math.random() * 48)];

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
       </div>
    );
}

export default Home;