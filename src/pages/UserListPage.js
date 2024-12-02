import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import usersData from '../data/users.json';

const UserListPage = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
    // Ordena os usuários por nome em ordem alfabética
    const sortedUsers = [...usersData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setUsers(sortedUsers);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Listagem de Usuários</h1>
      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
