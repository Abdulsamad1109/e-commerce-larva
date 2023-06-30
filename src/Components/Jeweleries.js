import React, {useContext} from 'react'
import '../App.css';
import { myContext } from '../App';

const Jeweleries = () => {


  const datas = useContext(myContext)
   let newArr = []
  return (
    <div className='filter d-flex justify-content-center flex-wrap border border-4 p-3 '>
    { datas.filter((jeweleries)=>{
        if (jeweleries.category ==="jewelery") {
            newArr.push(jeweleries)
        }
      })
    }

    {
        newArr.map((jewelery)=>{
            return <div className='cards text-center me-2 mb-2 border border-2 border-danger p-1'>
                <img src={jewelery.image} alt='images'/> <br/>
                <h1  style={{fontWeight:"bold"}}>{jewelery.title}</h1>
                <h1  style={{fontWeight:"bold"}}>{jewelery.price}</h1>
            </div>
        })
    }
    </div>
  )
}

export default Jeweleries
