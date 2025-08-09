import React from 'react'

const ScoreBoard = ({score}) => {

  return (
    <div className='flex justify-between items-center w-[300px] p-4 mb-4 bg-gray-800 rounded-lg font-semibold'>
      <div className='text-[#3880F8]'>You (X) :{score.X}</div>
      <div className='text-[#F8A300]'>AI (O) : {score.O}</div>

    </div>
  )
}

export default ScoreBoard