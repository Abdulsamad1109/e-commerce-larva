import React, {useContext} from 'react'
import '../App.css';
import { myContext } from '../App';

const Mens = () => {


  const datas = useContext(myContext)
   let newArr = []
  return (
    <div className='filter d-flex justify-content-center flex-wrap border border-4 p-3 '>
    { datas.filter((men)=>{
        if (men.category ==="men's clothing") {
          newArr.push(men)
        }
      })
    }

    {
        newArr.map((man)=>{
            return <div className='cards text-center me-2 mb-2 border border-2 border-danger p-1'>
                <img src={man.image} alt='images'/> <br/>
                <h1  style={{fontWeight:"bold"}}>{man.title}</h1>
                <h1  style={{fontWeight:"bold"}}>{man.price}</h1>
            </div>
        })
    }
    </div>
  )
}

export default Mens
