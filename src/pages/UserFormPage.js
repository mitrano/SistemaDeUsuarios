// Importa a biblioteca React, necessária para criar componentes e hooks
import React, { useState } from 'react';
// Importa o componente personalizado 'Button' para uso no formulário
import Button from '../components/Button';
// Importa o componente 'NavigationButton' para navegação
import NavigationButton from '../components/NavigationButton';

// Declaração do componente funcional 'UserFormPage'
// Este componente representa uma página de formulário para adicionar usuários
const UserFormPage = () => {
  // Declaração de estados para armazenar os valores do formulário
  // 'name', 'email' e 'description' representam os campos do formulário
  const [name, setName] = useState(''); // Estado para o campo "Nome"
  const [email, setEmail] = useState(''); // Estado para o campo "Email"
  const [description, setDescription] = useState(''); // Estado para o campo "Descrição"

  // Função chamada ao submeter o formulário
  // Evita o comportamento padrão (recarregar a página), exibe os dados no console e reseta os campos
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    console.log({ name, email, description }); // Exibe os dados no console para validação
    alert('Usuário Adicionado com Sucesso!'); // Alerta ao usuário sobre a conclusão
    // Reseta os campos do formulário para os valores iniciais
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    // Estrutura principal da página
    <div>
      {/* Título da página */}
      <h1>Criar Usuário</h1>
      
      {/* Formulário para adicionar informações do usuário */}
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para o nome do usuário */}
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name} // Valor vinculado ao estado 'name'
            onChange={(e) => setName(e.target.value)} // Atualiza o estado ao digitar
            required // Define o campo como obrigatório
          />
        </div>

        {/* Campo de entrada para o email do usuário */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email} // Valor vinculado ao estado 'email'
            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
            required // Define o campo como obrigatório
          />
        </div>

        {/* Campo de texto para a descrição do usuário */}
        <div>
          <label>Descrição:</label>
          <textarea
            value={description} // Valor vinculado ao estado 'description'
            onChange={(e) => setDescription(e.target.value)} // Atualiza o estado ao digitar
            rows="8" // Define o número de linhas do textarea
            required // Define o campo como obrigatório
          />
        </div>
        
        {/* Botão personalizado para submeter o formulário */}
        <Button label="Adicionar Usuário" type="submit" />
      </form>

      {/* Botão para navegação, posicionado à direita */}
      <div className="align-right">
        <NavigationButton />
      </div>
    </div>
  );
};

// Exporta o componente 'UserFormPage' para ser utilizado em outros módulos
export default UserFormPage;
