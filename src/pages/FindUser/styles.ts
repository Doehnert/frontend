import { Box, styled } from '@mui/material'

const formWidth = 530

export const signUpStyles = {
  paperStyle: {
    padding: '20px !important',
    height: '70vh',
    width: 280,
    margin: '20px auto',
  },
  avatarStyle: {
    backgroundColor: 'green',
  },
  buttonStyle: {
    margin: '8px 0',
    height: '50px',
  },
  inputStyle: {
    margin: '8px 0',
  },

    cardStyle: {
      padding: '20px !important',
      height: '70vh',
      width: 280,
      margin: '20px auto',
    },
}

type SignInBoxProps = {
  step?: number
  currentStep?: number
}

export const SignInBox = styled(Box, {
  name: 'SignInBox',
})<SignInBoxProps>(() => ({
  minWidth: formWidth,
  component: 'section',
}))
