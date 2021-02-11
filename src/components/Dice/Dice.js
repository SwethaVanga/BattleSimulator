import React from 'react'

export const Dice = (props) => {
  const { value } = props

  return (
    <div className='dice-wrapper'>
      {value === 1 ?
        <>
          <div className='dot dot_1'></div>
        </>
        : value === 2 ?
          <>
            <div className='dot dot_2'></div>
            <div className='dot dot_2'></div>
          </>
          : value === 3 ?
            <>
              <div className='dot dot_3'></div>
              <div className='dot dot_3'></div>
              <div className='dot dot_3'></div>
            </>
            : value === 4 ?
              <>
                <div className='dot dot_4'></div>
                <div className='dot dot_4'></div>
                <div className='dot dot_4'></div>
                <div className='dot dot_4'></div>
              </>
              : value === 5 ?
                <>
                  <div className='dot dot_5'></div>
                  <div className='dot dot_5'></div>
                  <div className='dot dot_5'></div>
                  <div className='dot dot_5'></div>
                  <div className='dot dot_5'></div>
                </>
                : value === 6 ?
                  <>
                    <div className='dot dot_6'></div>
                    <div className='dot dot_6'></div>
                    <div className='dot dot_6'></div>
                    <div className='dot dot_6'></div>
                    <div className='dot dot_6'></div>
                    <div className='dot dot_6'></div>
                  </>
                  : ''
      }
    </div>
  )
}
