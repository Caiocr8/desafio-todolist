import React, { useState } from 'react';
import Button from '../../components/button';
import './styles.css';
import {MdOutlineVisibilityOff, MdOutlineVisibility} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { validatorEmail, validatorPass } from '../../utils/validators';


const Register = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [name, namechange] = useState("");
  const [email, emailchange] = useState("");
  const [age, agechange] = useState("");
  

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    

  }
  
 

  return (
    <div className='register-container'>
      <h1 className='register-title'>Cadastre sua conta.</h1>
       <div className= 'box-register'>
          <form method='POST' className='box-register' onSubmit={handlesubmit}>
            <input value={name} onChange={e=> namechange(e.target.value)} placeholder='Nome' type="name" id='name' name='name' />
            <input value={email} onChange={e=> emailchange(e.target.value)} placeholder='Email' type="email" id='email' name='email' />
            <input value={age} onChange={e=> agechange(e.target.value)} placeholder='Idade' type="age" id='age' name='age' />
            <div>
              <input type={visible ? "text": "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' id='pasword' name='pass' /> 
              <div className='visible-password' onClick={() => setVisible(!visible)}>
                {visible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
              </div>  
                
            </div> 
            <div className='box-button-register'>
              <Button type="submit" title={'Sign up'}/>
            </div>
          </form>
          <div className='box-back-to-login'>
            <a className='button-back-to-login' href='/'>Voltar para login</a>
          </div>
       </div>    
    </div>
  );
}

export default Register;