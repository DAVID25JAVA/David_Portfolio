import React from 'react'
import { RingLoader } from 'react-spinners'

function Loader() {
  return (
    <div className='flex justify-center items-center mt-5'>
        <RingLoader color="#3b82f6"/>
    </div>
  )
}

export default Loader