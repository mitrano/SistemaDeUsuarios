// Importa a biblioteca React e os hooks 'useState' e 'useEffect' para gerenciar estado e efeitos colaterais
import React, { useState, useEffect } from 'react';
// Importa o componente de barra de navegação
import Navbar from '../components/Navbar';
// Importa o componente para exibir as informações do usuário
import usersData from '../data/users.json';
// Importa o botão de navegação para voltar à página anterior
import NavigationButton from '../components/NavigationButton';
// Importa um componente de carregamento visual da biblioteca Material-UI
import CircularProgress from '@mui/material/CircularProgress';
// Importa um botão reutilizável para interações adicionais
import Button from '../components/Button';

// Declaração do componente funcional 'UserListPage'
// Este componente exibe uma lista de usuários carregados de forma assíncrona
const UserListPage = () => {
  // Estado para armazenar a lista de usuários
  const [users, setUsers] = useState([]);
  // Estado para controlar o carregamento dos dados
  const [isLoading, setIsLoading] = useState(true);
  // Estado para armazenar mensagens de erro, caso ocorram
  const [error, setError] = useState(null);

  // Hook 'useEffect' que executa o carregamento simulado dos usuários ao montar o componente
  useEffect(() => {
    // Função assíncrona que simula o carregamento de dados com atraso
    const loadUsers = async () => {
      setTimeout(() => {
        try {
          // Simula uma chance de erro no carregamento
          if (Math.random() > 0.7) throw new Error('Falha ao carregar os usuários');
          // Ordena os usuários por nome de forma alfabética
          const sortedUsers = [...usersData].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setUsers(sortedUsers); // Atualiza o estado com os usuários carregados
          setIsLoading(false); // Indica que o carregamento foi concluído
        } catch (err) {
          setError(err.message); // Atualiza o estado de erro com a mensagem
          setIsLoading(false); // Finaliza o carregamento mesmo em caso de erro
        }
      }, 2000); // Simula um atraso de 2 segundos
    };

    loadUsers(); // Chama a função de carregamento ao montar o componente
  }, []);

  return (
    <div>
      {/* Botão de navegação para voltar à página anterior */}
      <div className="align-right">
        <NavigationButton />
      </div>

      {/* Título da página */}
      <h1>Listagem de Usuários</h1>

      {/* Condicional para exibir o estado de carregamento, erro ou lista de usuários */}
      {isLoading ? (
        // Exibe o indicador de carregamento enquanto os dados são carregados
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : error ? (
        // Exibe uma mensagem de erro caso ocorra falha no carregamento
        <div className="error-message">
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()} // Botão para tentar novamente recarregando a página
            className="retry-button"
          >
            Tentar Novamente
          </button>
        </div>
      ) : (
        // Exibe a lista de usuários caso o carregamento seja bem-sucedido
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id}>
              {/* Renderiza as informações do usuário */}
              <div>
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
                <div className="user-description">{user.description}</div>
              </div>
              {/* Botão para interações, como editar informações do usuário */}
              <Button label="Editar" type="submit" />
            </li>
          ))}
          {/* Botão adicional de navegação */}
          <div className="align-right">
            <NavigationButton />
          </div>
        </ul>
      )}
    </div>
  );
};

// Exporta o componente 'UserListPage' para ser utilizado em outros módulos
export default UserListPage;
