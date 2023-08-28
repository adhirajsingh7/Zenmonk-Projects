import React from 'react'

const Details = (props) => {
  return (
    <div className='details'>
        <div>
            <img src={props.song.img_src} alt="" />
        </div>
        <h3>{props.song.title}</h3>
        <h3>{props.song.artist}</h3>
    </div>
  )
}

export default Details