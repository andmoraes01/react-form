import React from 'react';

const AddCostumer = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <form>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input id="name" name="name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="date">Data de Nascimento</label>
          <input id="birth" name="birth" type="date" />
        </div>
        <button type="submit">Adicionar</button>
      </form>
    </>
  );
};

export default AddCostumer;
