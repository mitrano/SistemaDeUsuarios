// Importa a biblioteca React, necessária para criar interfaces de usuário
import React from 'react';
// Importa o módulo ReactDOM para manipulação do DOM virtual e renderização
import ReactDOM from 'react-dom/client';
// Importa o componente principal da aplicação
import App from './App';
// Importa o arquivo de estilos globais para a aplicação
import './styles.css'; // Opcional: dependendo da necessidade de estilos globais

// Obtém a referência ao elemento com id "root" no arquivo index.html
// Este será o contêiner onde o aplicativo React será renderizado
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente <App /> dentro do contêiner "root"
// Envolve o componente em <React.StrictMode> para identificar problemas no código durante o desenvolvimento
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
