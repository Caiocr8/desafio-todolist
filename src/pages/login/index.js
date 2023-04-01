import React, { useState } from 'react';
import Button from '../../components/button';
import './styles.css';
import {MdOutlineVisibilityOff, MdOutlineVisibility} from 'react-icons/md'


const Login = () => {
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      alert('login')
      setLoading(false)
    } 
    catch (err) {
      alert('Algo deu errado com o loginn' + err)
    }
  }
  
  const handleChange = (e) => {
    setPassword(e.target.password)
    e.preventDefault();
    console.log('Digitando...', e.target.name, e.target.value)
  }
    

  return (
    <div className='login-container'>
      <h1 className='login-title'>Bem-Vindo(a)!</h1>
       <div className= 'box-login'>
          <form className='box-login'>
            <input  onChange={handleChange} placeholder='Email' type="email" id='email' name='email' />
            <div>
              <input type={visible ? "text": "password"} value={password} onChange={handleChange} placeholder='Password' id='pasword' name='password' /> 
              <div className='visible-password' onClick={() => setVisible(!visible)}>
                {visible ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
              </div>    
            </div>
            <div className='box-forget-password'>
              <button type='button' onClick={() => {console.log("TESTE")}} className='button-forgot-password'>Esqueceu a senha</button>
            </div>
            <div className='box-button-login'>
              <Button onclick={handleSubmit} title={'Login'}/>
            </div>
          </form>
          <div className='box-signup'>
            <p>Não tem uma conta? <a className='button-signup' href='/register'>Cadastre-se</a></p>
          </div>
       </div>    
    </div>
  );
}

export default Login