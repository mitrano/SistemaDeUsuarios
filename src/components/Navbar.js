import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ links = [] }) => {
  return (
    <nav>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          {link.icon && <span>{link.icon}</span>} {/* Renderiza o ícone, se fornecido */}
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
