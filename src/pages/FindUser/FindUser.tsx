import { yupResolver } from '@hookform/resolvers/yup'
import { LoadingButton } from '@mui/lab'
import {
  Alert,
  Box,
  Container, TextField
} from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import BasicAuthCard from '../../components/common/BasicAuthCard/BasicAuthCard'
import UserCard from './components/UserCard'
import { SignInBox, signUpStyles } from './styles'

type FormValues = {
  nis: string
}

type Citizen = {
  fullName: string
  nis: number
}

const FindUser = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('');
  const [citizen, setCitizen] = useState({} as Citizen)

  let signInSchema
  signInSchema = Yup.object().shape({
    nis: Yup.number().required('NIS é um campo obrigatório'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    defaultValues: {
    },
    resolver: yupResolver(signInSchema),
  })

  const onSubmit: SubmitHandler<FormValues> = (signInData): void => {
    var data = JSON.stringify({
      "fullName": signInData.nis
    });

    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/users/${signInData.nis}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    setIsLoading(true)
    axios(config)
      .then(function (response) {
        console.log(response)
        setIsLoading(false)
        setError('')
        setCitizen({
          fullName: response?.data?.data?.fullName,
          nis: response?.data?.data?.nis,
        })
      })
      .catch(function (error) {
        console.log(error)
        console.log(error)
        let msg
        if (error?.response?.status === 404) {
          msg = 'Usuário não encontrado';
        } else {
          msg = error?.message
        }
        setError(msg)
        console.log(msg)
        setCitizen({} as Citizen)
        setIsLoading(false)
      });

  }
  return (
    <Container>
      <BasicAuthCard title={'Pesquisar NIS'}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SignInBox>
            <TextField
              error={errors.nis ? true : false}
              helperText={errors.nis && errors.nis?.message}
              label='NIS'
              placeholder='Entre com o NIS'
              fullWidth
              type={"number"}
              variant='filled'
              sx={signUpStyles.inputStyle}
              {...register('nis')}
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
            Procurar
          </LoadingButton>
        </form>
      </BasicAuthCard>

      {error && <Alert severity="error">{error}</Alert>}

      {citizen?.nis &&
        <Box sx={signUpStyles.cardStyle}>
          <UserCard citizen={citizen} />
        </Box>
      }

    </Container>
  )
}

export default FindUser
