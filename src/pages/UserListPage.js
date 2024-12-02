import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import UserCard from '../components/UserCard';
import usersData from '../data/users.json';
import HomeButton from '../components/HomeButton';
import CircularProgress from '@mui/material/CircularProgress'; // Importando o componente de carregamento

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    // Simula o carregamento de dados com atraso
    const loadUsers = async () => {
      setTimeout(() => {
        try {
          if (Math.random() > 0.7) throw new Error('Falha ao carregar os usuários');
          const sortedUsers = [...usersData].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setUsers(sortedUsers);
          setIsLoading(false); // Finaliza o carregamento
        } catch (err) {
          setError(err.message); // Atualiza o estado do erro
          setIsLoading(false);
        }
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
        <div className="loading-container">
          <CircularProgress /> {/* Indicador gráfico de carregamento */}
        </div>

      ) : error ? (
        
      <div className="error-message">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="retry-button"
        >
          Tentar Novamente
        </button>
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
