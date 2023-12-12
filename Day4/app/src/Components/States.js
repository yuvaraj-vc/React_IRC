import {useState} from 'react'
const States=()=>{
const [data,setData]=useState(0);
const inc=()=>
{
    setData(data+1);
}
const dec=()=>
{
    setData(data-1);
}
return(
    <>
    <p>{data}</p>
    <button onClick={inc}>Increase</button>
    <button onClick={dec}>Decrease</button>
    </>
)
}

export default States