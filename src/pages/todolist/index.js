import React from 'react'
import ButtonFilter from '../../components/button-filter'
import Footer from '../../components/footer';
import './styles.css'

const TodoList = () => {

  var data = new Date();
  const diaEscrito = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"]
  const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho","agosto","setembro","outubro","novembro","dezembro"];
  var dia = String(data.getDate()).padStart(2, '0');
  var diaDaSemana = diaEscrito[(data.getDay())];
  var mes = meses[(data.getMonth())];
  var ano = data.getFullYear();
  var dataAtual = diaDaSemana + ', ' + dia + ' de ' + mes + ' de ' + ano;

  return (
    <div>
      <header className='header-todolist'>
        <div className='title-filter'>
          <p>Filtros</p>
        </div>
        <div className='box-button-filter'>
          <ButtonFilter bgcolor={'rgba(31, 204, 121, 1)'} textcolor={'rgba(255, 255, 255, 1)'} title={'Todas'} />
          <ButtonFilter title={'A fazer'}/>
          <ButtonFilter title={'Feitas'}/>
        </div>
      </header>
      <div className='box-date-now'>
        <p className='date-now'>{dataAtual}</p>
      </div>
      <Footer />
    </div>
  )
}

export default TodoList