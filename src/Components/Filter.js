import React, { useContext } from 'react'
import '../App.css';
import { myContext } from '../App';

const Filter = () => {

  const datas = useContext(myContext);
  return (
    <div className='filter d-flex justify-content-center flex-wrap border border-4 p-3 '> 
    {datas.map((data)=>{
      return <div className='cards text-center me-2 mb-2 border border-2 border-danger p-2'>
        <img src={data.image} alt='images'/> <br/>
        <h1 style={{fontWeight:"bold"}}>{data.title}</h1> 
        <h1 style={{fontWeight:"bold"}}>{data.price}</h1>
        </div>
    })}
    </div>
  )
}

export default Filter
