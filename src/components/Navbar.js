// Importa a biblioteca React, necessária para criar componentes funcionais
import React from 'react';
// Importa o componente 'NavLink' do React Router, usado para navegação com estilos dinâmicos
import { NavLink } from 'react-router-dom';

// Declaração do componente funcional 'Navbar'
// Este componente renderiza uma barra de navegação com links dinâmicos
// A propriedade 'links' é um array de objetos que define os links da navegação
const Navbar = ({ links = [] }) => {
  return (
    // Renderiza o elemento <nav>, que agrupa os links de navegação
    <nav>
      {/* Mapeia o array 'links' para criar um componente <NavLink> para cada item */}
      {links.map((link, index) => (
        <NavLink
          // 'key' fornece um identificador único para cada link, essencial para listas no React
          key={index}
          // 'to' define o destino da navegação para o link
          to={link.path}
          // 'className' aplica a classe 'active-link' ao link ativo
          className={({ isActive }) => (isActive ? 'active-link' : '')}
        >
          {/* Renderiza o ícone do link, se ele for fornecido no objeto 'link' */}
          {link.icon && <span>{link.icon}</span>}
          {/* Exibe o rótulo do link */}
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

// Exporta o componente 'Navbar' para ser utilizado em outros módulos
export default Navbar;
