import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Container, TextField
} from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import BasicAuthCard from '../../components/common/BasicAuthCard/BasicAuthCard'
import ConfirmationModal from './components/ConfirmationModal'
import { SignInBox, signUpStyles } from './styles'

type FormValues = {
  fullName: string
}

const Signup = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('');

  let signInSchema
  signInSchema = Yup.object().shape({
    fullName: Yup.string().required('O nome é um campo obrigatório'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues: {
    },
    mode: 'all',
    resolver: yupResolver(signInSchema),
  })


  const onSubmit: SubmitHandler<FormValues> = (signInData): void => {
    var data = JSON.stringify({
      "fullName": signInData.fullName
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/users',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    setIsLoading(true)
    axios(config)
      .then(function (response) {
        console.log(response)
        setMsg(`Cidadão ${signInData.fullName} cadastrado com sucesso com o NIS: ${response?.data?.data?.nis}`);
        setOpen(true)
        setIsLoading(false)
        setError('')
      })
      .catch(function (error) {
        setError(error?.message)
        setIsLoading(false)
      });
  }

  return (
    <Container>
      <BasicAuthCard title={'Cadastro de usuários'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SignInBox>
            <TextField
              error={errors.fullName ? true : false}
              helperText={errors.fullName && errors.fullName?.message}
              label='Nome Completo'
              placeholder='Entre com o nome'
              fullWidth
              variant='filled'
              sx={signUpStyles.inputStyle}
              {...register('fullName')}
            />

          </SignInBox>
          <LoadingButton
            loading={isLoading}
            disabled={isSubmitting || !isValid}
            sx={signUpStyles.buttonStyle}
            fullWidth
            variant='contained'
            type='submit'
            color='primary'
          >
            Enviar
          </LoadingButton>
        </form>
      </BasicAuthCard>
      <ConfirmationModal
        open={open}
        onClose={() => setOpen(false)}
        msg={msg}
      />

      {error && <Alert severity="error">{error}</Alert>}

    </Container>
  )
}

export default Signup
