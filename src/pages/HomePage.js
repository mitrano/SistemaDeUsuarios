// Importa a biblioteca React, necessária para criar componentes funcionais
import React from 'react';

// Declaração do componente funcional 'HomePage'
// Este componente representa a página inicial do sistema de Gestão de Usuários
const HomePage = () => (
  // Estrutura principal da página inicial
  <div>
    {/* Título principal da página */}
    <h1>Bem-vindo ao sistema de Gestão de Usuários!</h1>
    
    {/* Imagem decorativa da página inicial */}
    <img 
      src="/images/user_registration_homepage.jpg" // Define o caminho da imagem exibida
      alt="Homepage Sistema de Usuários" // Texto alternativo para acessibilidade
      style={{ width: '100%', height: 'auto', marginTop: '20px' }} // Estilo inline para dimensionamento e espaçamento
    />
  </div>
);

// Exporta o componente 'HomePage' para ser utilizado em outros módulos
export default HomePage;
