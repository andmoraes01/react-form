import React from 'react';
import { Formik } from 'formik';
import { ValidateField } from '../components/ValidateField'
import * as yup from 'yup';

const AddCostumer = () => {

  const dataMinima = new Date();
  dataMinima.setFullYear(dataMinima.getFullYear() - 18);

  const schema = yup.object({
    name: yup.string()
      .required('Campo obrigatório. Favor informar o Nome.')
      .min(10, 'O nome deve conter no mínimo 10 caracteres.')
      .max(30, 'O nome deve conter no máximo 30 caracteres.'),
    email: yup.string()
      .required('Campo obrigatório. Favor informar o Email.')
      .email('O email é inválido !'),
    birth: yup.date()
      .required('Campo obrigatório. Favor informar a Data de nascimento.')
      .max(dataMinima, 'Data inválida! É necessário possuir mais que 18 anos para se cadastrar.')
  });

  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik
        initialValues={{ name: '', email: '', birth: '' }}
        validationSchema={schema}
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
