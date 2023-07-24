import React from 'react';
import { Formik } from 'formik';

const AddCostumer = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={
          { name: '', email: '@mail.com', birth: '' }
        }
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            noValidade
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                value={props.values.name}
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={props.values.email}
                onChange={props.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Data de Nascimento</label>
              <input
                id="birth"
                name="birth"
                type="date"
                value={props.values.birth}
                onChange={props.handleChange}
              />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddCostumer;
