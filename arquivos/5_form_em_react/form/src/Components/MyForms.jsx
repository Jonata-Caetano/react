import "./MyForms.css";

const MyForms = () => {
  return (
    <div>
      {/* 1 - Criação de form*/}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        {/* 2 - Label envolvendo input*/}
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail"/>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForms;