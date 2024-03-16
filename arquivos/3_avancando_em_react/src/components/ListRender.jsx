import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Mateus", "Pedro", "Jonata"]);
  const [users, setUsers] = useState([
    { id: 1, name: "Mateus", age: 28 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Marcos", age: 32 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUser) => {
        console.log(prevUser);
      return prevUser.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
