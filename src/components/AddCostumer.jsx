import React from 'react';
import { Formik } from 'formik';
import { ValidateField } from '../components/ValidateField'

const AddCostumer = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={
          { name: '', email: '', birth: '' }
        }
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Campo obrigatório. Favor informar o Nome."
          }
          if (!values.email) {
            errors.email = "Campo obrigatório. Favor informar o Email."

          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "O email é inválido !"
          }
          if (!values.birth) {
            errors.birth = "Campo obrigatório. Favor informar a Data de nascimento."
          }
          return errors;
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidade>
            <ValidateField
              id="name"
              name="name"
              type="text"
              label="Nome:"
            />

            <ValidateField
              id="email"
              name="email"
              type="email"
              label="Email:"
            />

            <ValidateField
              id="birth"
              name="birth"
              type="date"
              label="Data de nascimento:"
            />

            <button type="submit">Adicionar</button>

          </form>
        )}
      </Formik>
    </>
  );
};

export default AddCostumer;
