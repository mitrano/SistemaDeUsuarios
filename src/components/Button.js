// Importa a biblioteca React, necessária para criar componentes funcionais
import React from 'react';

// Declaração do componente funcional 'Button'
// Este componente exibe um botão reutilizável com um rótulo e uma ação associada
const Button = ({ label, onClick }) => (
  // Renderiza um botão com os seguintes atributos:
  // 'className' - Define a classe CSS 'button' para estilização
  // 'onClick' - Define a função que será executada ao clicar no botão
  <button className="button" onClick={onClick}>
    {/* Exibe o texto do botão, definido pela propriedade 'label' */}
    {label}
  </button>
);

// Exporta o componente 'Button' para ser utilizado em outros módulos
export default Button;
