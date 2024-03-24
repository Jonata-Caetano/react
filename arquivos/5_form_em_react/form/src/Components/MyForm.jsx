import "./MyForm.css";
import { useState } from "react";

const MyForm = ({user}) => {
  // 6 -Controlled Input
  // 3 - Gerencinamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    console.log(name, email);

    // 7 - Limpar formulario
    setName("");
    setEmail("");
  };

  //console.log(name);
  //console.log(email);

  return (
    <div>
      {/* 5 -  Envio de formulario*/}
      {/* 1 - Criação de form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input*/}
        <label>
          <span>E-mail</span>
          {/* 4 -  Simplificação de manipulação de state*/}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
