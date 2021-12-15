import { useEffect, useState } from 'react';
import {nanoid} from "nanoid"
import './App.css';

const App = () => {
  const[data,setData]=useState([]);
 
   useEffect(()=>{

        const arrayOfWord = [
          {
            name : 'book',
            id : 1,
            className: 'word'
            },
            {
              name : 'computer',
              id : 2,
              className: 'word'
            },
            {
              name : 'phone',
              id : 3,
              className: 'word'
            },
            {
              name : 'pen',
              id : 4,
              className: 'word'
            },
            {
              name : 'cup',
              id : 5,
              className: 'word'
            },
            {
              name : 'paper',
              id : 6,
              className: 'word'
            },
            {
              name : 'car',
              id : 7,
              className: 'word'
            },
            {
              name : 'licence',
              id : 8,
              className: 'word'
            },
            {
              name : 'tablet',
              id : 9,
              className: 'word'
            },
            {
              name : 'phone',
              id : 10,
              className: 'word'

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
  const [storeId, setStoreId] = useState([]);
  //const [compareArray]

useEffect(()=> {
  if(storeId.length === 2) {
    //let filtered = [];
    let filteredArray = data.filter(el => el.customId === storeId[0]);
    let filteredArray1 = data.filter(el => el.customId === storeId[1]);
    let filtered = [filteredArray,filteredArray1];

    if(filteredArray[0].id === filteredArray1[0].id) {
      console.log('yes they are same')
      let array = data.map(el => el.id === filteredArray1[0].id ? {...el, className:'word2'}: el)
      setData(array)
    } else if (filteredArray[0].id !== filteredArray1[0].id) {
      let array = data.map(el => el.id === filteredArray1[0].id ? {...el, className:'word'}: el)
      setData(array)
    }
    
    setStoreId([]);
    
  }
}, [storeId])

  const getId = (customId) => {
    
    setStoreId([...storeId, customId]);
    let array = data.map(el => el.customId === customId ? {...el, className:'word2'}: el)
      setData(array)
  }

//console.log(storeId)
  console.log(storeId,'storeId');
  console.log(data)
  return (
    <div className="App">
      <div className='container'>
        {
          data.length && data.map(word => {
            return(
              <div className='box' onClick={() => getId(word.customId)}>
                <p className={word.className}>{word.name}</p>
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
}

export default App;
