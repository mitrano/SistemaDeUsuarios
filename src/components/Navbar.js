import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        <HomeIcon /> Home
      </NavLink>
      <NavLink to="/users" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        <ListIcon /> Lista de Usuários
      </NavLink>
      <NavLink to="/add-user" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        <PersonAddIcon /> Adicionar Usuário
      </NavLink>
    </nav>
  );
};

export default Navbar;
