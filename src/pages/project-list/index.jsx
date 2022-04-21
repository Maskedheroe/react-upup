import React, { useEffect, useState } from "react";

export default function ProjectListScreen() {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("").then(async (response) => {
      if (response.ok) {
        setList(await response.json());
      }
    });
  }, [param]);
  const handleChange = (evt) => {
    setParam({ ...param, name: evt.target.value });
  };

  return (
    <div>
      <input type="text" value={param.name} onChange={handleChange} />
      <select
        value={param.personId}
        onChange={(evt) =>
          setParam({
            ...param,
            personId: evt.target.value,
          })
        }
      >
        <option value={""}>负责人</option>
        {users.map((user) => (
          <option value={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
}
