import React, {useContext} from 'react'
import '../App.css';
import { myContext } from '../App';

const Electronics = () => {


  const datas = useContext(myContext)
   let newArr = []
  return (
    <div className='filter d-flex justify-content-center flex-wrap border border-4 p-3 '>
    { datas.filter((electronics)=>{
        if (electronics.category ==="electronics") {
            newArr.push(electronics)
        }
      })
    }

    {
        newArr.map((electronic)=>{
            return <div className='cards text-center me-2 mb-2 border border-2 border-danger p-1'>
                <img src={electronic.image} alt='images'/> <br/>
                <h1  style={{fontWeight:"bold"}}>{electronic.title}</h1>
                <h1  style={{fontWeight:"bold"}}>{electronic.price}</h1>
            </div>
        })
    }
    </div>
  )
}

export default Electronics
