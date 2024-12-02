import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserListPage from './pages/UserListPage';
import UserFormPage from './pages/UserFormPage';
import Navbar from './components/Navbar'; // Importa o componente Navbar
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const App = () => {
  // Lista de links para o Navbar
  const links = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/users', label: 'Lista de Usuários', icon: <ListIcon /> },
    { path: '/add-user', label: 'Adicionar Usuário', icon: <PersonAddIcon /> },
  ];

  return (
    <Router>
      <Navbar links={links} /> {/* Adiciona o Navbar antes das rotas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/add-user" element={<UserFormPage />} />
      </Routes>
    </Router>
  );
};

export default App;
