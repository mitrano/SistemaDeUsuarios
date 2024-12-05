// Importa a biblioteca React, necessária para criar componentes funcionais
import React from 'react';
// Importa o hook 'useNavigate' do React Router, usado para navegação programática
import { useNavigate } from 'react-router-dom';

// Declaração de um componente funcional chamado 'NavigationButton'
// Este componente exibe um botão que, ao ser clicado, navega para uma página específica
const NavigationButton = ({ label = 'Voltar para a Home', destination = '/' }) => {
  // Obtém a função 'navigate' usando o hook 'useNavigate'
  // Esta função é usada para redirecionar o usuário para outro caminho
  const navigate = useNavigate();

  return (
    // Renderiza um botão com os seguintes atributos:
    // 'onClick' - Define o comportamento ao clicar no botão, que chama a função 'navigate' com o destino especificado
    // 'className' - Aplica uma classe CSS chamada 'home-button' para estilização
    <button
      onClick={() => navigate(destination)}
      className="home-button"
    >
      {/* Define o texto exibido no botão. Por padrão, exibe 'Voltar para a Home', mas pode ser personalizado */}
      {label}
    </button>
  );
};

// Exporta o componente 'NavigationButton' para que possa ser importado e usado em outros arquivos
export default NavigationButton;
