// Importa a biblioteca React, essencial para a criação de interfaces declarativas e componentes reutilizáveis.
import React from 'react'; 

// Importa componentes do react-router-dom para gerenciar a navegação entre páginas.
// Router fornece o contexto de navegação para o aplicativo.
// Routes contém todas as rotas definidas.
// Route define um mapeamento entre um caminho de URL e um componente.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

// Importa as páginas principais do aplicativo. 
// Cada página representa uma rota específica no sistema.
import HomePage from './pages/HomePage'; 
import UserListPage from './pages/UserListPage';
import UserFormPage from './pages/UserFormPage';

// Importa o componente Navbar, que será responsável pela navegação.
import Navbar from './components/Navbar'; 

// Importa ícones da biblioteca Material-UI para uma melhor experiência visual.
import HomeIcon from '@mui/icons-material/Home'; 
import ListIcon from '@mui/icons-material/List'; 
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// Define o componente principal da aplicação.
const App = () => {
  // Cria a lista de links que serão exibidos no Navbar. 
  // Cada link contém o caminho (path), o rótulo (label) e o ícone (icon) correspondente.
  const links = [
    { path: '/', label: 'Home', icon: <HomeIcon /> }, 
    { path: '/users', label: 'Lista de Usuários', icon: <ListIcon /> }, 
    { path: '/add-user', label: 'Adicionar Usuário', icon: <PersonAddIcon /> }, 
  ];

  // Renderiza o Router que encapsula toda a aplicação, permitindo a navegação entre rotas.
  return (
    <Router>
      {/* // Renderiza o componente Navbar passando os links como props. */}
      <Navbar links={links} />

      {/* // Define as rotas da aplicação. Cada rota mapeia uma URL para um componente específico. */}
      <Routes>
        {/* // Define a rota para a página inicial. */}
        <Route path="/" element={<HomePage />} /> 
        
        {/* // Define a rota para exibir a lista de usuários. */}
        <Route path="/users" element={<UserListPage />} /> 
        
        {/* // Define a rota para adicionar um novo usuário. */}
        <Route path="/add-user" element={<UserFormPage />} /> 
      </Routes>
    </Router>
  );
};

// Exporta o componente principal da aplicação para ser utilizado no ponto de entrada do React (index.js).
export default App;
