import React, { useEffect, useState } from "react";

export default function List({ param, setParam }) {
  const [users, setUsers] = setState([]);

  return (
    <form>
      <input
        type="text"
        value={param.name}
        onChange={(evt) => {
          setParam({ ...param, name: evt.target.value });
        }}
      />
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
    </form>
  );
}
