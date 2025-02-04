import React from 'react'

const Quizz = ({quizz}) => {
  return (
    <div className='bg-[#FFC857]'>
      <p>{quizz.name}</p>
      <p>{quizz.description}</p>
    </div>
  )
}

export default Quizz
