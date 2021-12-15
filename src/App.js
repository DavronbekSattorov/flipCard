import { useEffect, useState } from 'react';
import {nanoid} from "nanoid"
import './App.css';

const App = () => {
  const[data,setData]=useState([]);
 
   useEffect(()=>{

        const arrayOfWord = [
          {
            name : 'book',
            id : 1
            },
            {
              name : 'computer',
              id : 2
            },
            {
              name : 'phone',
              id : 3
            },
            {
              name : 'pen',
              id : 4
            },
            {
              name : 'cup',
              id : 5
            },
            {
              name : 'paper',
              id : 6
            },
            {
              name : 'car',
              id : 7
            },
            {
              name : 'licence',
              id : 8
            },
            {
              name : 'tablet',
              id : 9
            },
            {
              name : 'phone',
              id : 10
            }
        ]

        let arrayWords = [...arrayOfWord, ...arrayOfWord];

    
        arrayWords =  arrayWords.map( i => {
          return {...i,customId:nanoid()}
        })

        for(let i=0; i<arrayWords.length; i++){
            const tempInd=Math.floor(Math.random()*arrayWords.length) //4
            const curr=arrayWords[tempInd]//pen
            arrayWords[tempInd]=arrayWords[i]
            arrayWords[i]=curr
        }
        setData(arrayWords)

      },[])
  
        
  // console.log(arrayWords)
  const [storeId, setStoreId] = useState();
  //const [compareArray]
  
  const getId = (id) => {
    setStoreId(id);
  }


  console.log(storeId,'storeId');
  console.log(data)
  return (
    <div className="App">
      <div className='container'>
        {
          data.length && data.map(word => {
            return(
              <div className='box' onClick={() => getId(word.customId)}>
                <p className={storeId === word.customId ? 'word2' : 'word'}>{word.name}</p>
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
