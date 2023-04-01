import React from 'react'
import './styles.css'

const ButtonFilter = (props) => {
  return (
    <button style={{background: props.bgcolor, color: props.textcolor}} onClick={props.onClick} className='button-filter-component'>{props.title}</button>
  )
}

export default ButtonFilter