import React from 'react';
import './styles.css';

const Button = (props) => {
  return ( 
    <button type={props.type} onClick={props.onclick} className='button-component'>{props.title}</button>
    
  )
}

export default Button