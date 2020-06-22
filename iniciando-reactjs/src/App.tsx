import React,{ FormEvent, useState, ChangeEvent } from 'react';

function App() {

  console.log("Renderizou");

  const [name, setName] = useState("Jaqueline Fernandes");

  function onSubmit(event: FormEvent){
    event.preventDefault();
    alert("Form Submetido");
  }

  function onChange(event: ChangeEvent<HTMLInputElement>){
    setName(event.target.value);
  }

  return (

    <div className="App">
      <h1>Iniciando com React</h1>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" value={name} onChange={onChange}/>
        </p>
        <p>
          <h3>{name}</h3>
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </div>
  );
}

export default App;
