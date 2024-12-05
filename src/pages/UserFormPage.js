import React, { useState } from 'react';
import Button from '../components/Button';
import NavigationButton from '../components/NavigationButton';


const UserFormPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, description });
    alert('Usuário Adicionado com Sucesso!');
    setName('');
    setEmail('');
    setDescription('');
  };

  return (
    <div>      
      <h1>Criar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label> {/* Campo de descrição */}
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="8"
            required
          />
        </div>        
        <Button label="Adicionar Usuário" type="submit" />
      </form>
      <div className="align-right">
        <NavigationButton />
      </div>
    </div>
  );
};

export default UserFormPage;
