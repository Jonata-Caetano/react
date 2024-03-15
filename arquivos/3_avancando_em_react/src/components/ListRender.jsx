import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Mateus", "Pedro", "Jonata"]);
  const [users] = useState([
    { id: 1, name: "Mateus", age: 28 },
    { id: 2, name: "João", age: 30 },
    { id: 3, name: "Marcos", age: 32 },
  ]);
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.age} anos</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
