import React from 'react'
import '../Assets/Dashboard.css'
function Dashboard() {
  return (
    <>
    <div className='main hv-100 wv-100 flex flex-col'>
      <div className='appbar hv-5 wv-100 flex theme-bg items-center justify-end'>
       <div className='wv-100 flex theme-bg items-center justify-end'>
       appbar
       </div>
      </div>
      <div className='content-container hv-95 wv-100 flex-row justify-center '>
        <div className='leftbar wv-20 theme-bg hv-95'>
            LeftBar
        </div>
        <div className='contentr wv-80 hv-95 flex justify-center theme-bg1 items-center'>
             <div className='wv-75 hv-85 '>
             content
             </div>
        </div>
      </div>
    </div>
   

    </>
  )
}

export default Dashboard