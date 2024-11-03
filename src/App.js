import './index';
import React, { useState } from 'react';

function App() { //Estado para armazenar a entrada do usuário
  const [input, setInput] = useState('');

  //Função chamado ao clicar em um botão numérico ou operador
  const handleClick = (value) => {
    setInput(input + value); // Atualiza o estado adicionando o valor ao imput
  };

  // Função para calcucal o resultado da espressão
  const calculate = () => {
    try {
      //Avalia a expressão e atualiza o input com o rresultado
      setInput(eval(input).toString());
    } catch (error) {
      //Em caso de erro, exibe "error"
      setInput('Error');
    }
  };
  const clear = () => {
    setInput('');// Reseta o estado para string vazia
  };

  return (
    <div className="App">
      <div className='calculator'>
        <input type='text' value={input} readOnly />
        <div className='buttons'>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>

          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>

          <button onClick={clear}>C</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
