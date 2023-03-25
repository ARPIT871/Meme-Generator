import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import {Text} from '../components/Text';
import { createRef } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';

export const Edit = () => {
    const [count, setCount] = useState(0)
    const [params] = useSearchParams();
    // console.log(params.get("url"))
    const memeRef=createRef();
    const addText = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <div ref={memeRef} style={{width:"600px",border:"1px solid"}} className='meme mt-5 mb-5 '>
                <img style={{ width: "250px" }} alt="Image" src={params.get("url")}></img>
                 {Array(count).fill(0).map((e)=><Text/>)}
            </div>
            <Button onClick={()=>{addText()}}>Add Text</Button>
            <Button variant='success' onClick={(e)=>{exportComponentAsJPEG(memeRef)}}>Save</Button>

        </div>
    )
}
