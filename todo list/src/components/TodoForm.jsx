import { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category)
    setValue("");
    setCategory("");
  };
  return (
    <div className="todo-form">
      <h2> Criar tarefa</h2>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=""> Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudos</option>
        </select>
        <button type="summit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
