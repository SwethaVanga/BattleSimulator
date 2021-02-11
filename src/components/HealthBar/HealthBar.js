import React, { useEffect, useState } from 'react'

export const HealthBar = (props) => {
  const { health, lostHealth, id } = props
  const [isShow, setIsShow] = useState(false)

	/**
	 * Toggle lost-health class based on lostHealth prop
	*/
  useEffect(() => {
    if (lostHealth) {
      setIsShow(true)
      setTimeout(() => {
        setIsShow(false)
      }, 500)
    }
  }, [lostHealth])

  return (
    <div className='health-bar' id={id} >
      <div className={`lost-health ${isShow ? 'lost-health__show' : ''}`}>
        -{lostHealth}
      </div>
      <div className='bar'>
        <div
          className='bar-inner'
          style={{
            height: `${health}%`,
            backgroundColor: health >= 70 ? 'green' : health >= 30 ? 'yellow' : 'red'
          }}></div>
      </div>
      <div className='health'>{health}</div>
    </div>
  )
}

