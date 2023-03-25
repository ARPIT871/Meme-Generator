import React from 'react'
import MemeCard from '../components/MemeCard'
import { getAllMemes } from '../api/memes';
import { useEffect,useState} from 'react';

  


export const Home = () => {
    const [data,SetData] = useState([])
    useEffect(() => {
        getAllMemes().
        then((memes)=>SetData(memes.data.memes))
      }, [])
  return (
    <div className='row'>
        {console.log(data)}
        {data.map((e)=>data?<MemeCard meme={e}/>:<h1>No data</h1>)}
    </div>
  )
}
