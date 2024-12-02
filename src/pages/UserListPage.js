import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import usersData from '../data/users.json';
import HomeButton from '../components/HomeButton';
import CircularProgress from '@mui/material/CircularProgress'; // Importando o componente de carregamento

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    // Simula o carregamento de dados com atraso
    const loadUsers = async () => {
      setTimeout(() => {
        const sortedUsers = [...usersData].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        setUsers(sortedUsers);
        setIsLoading(false); // Finaliza o carregamento
      }, 2000); // Simula atraso de 2 segundos
    };

    loadUsers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="align-right">
        <HomeButton />
      </div>
      <h1>Listagem de Usuários</h1>
      {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <CircularProgress /> {/* Indicador gráfico de carregamento */}
        </div>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
          
          <div className="align-right">
            <HomeButton />
          </div>

        </div>
        
      )}
    </div>
  );
};

export default UserListPage;
