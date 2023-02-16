import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import BasicModal from '../../../components/common/BasicModal/BasicModal'


export type NewUserModalProps = {
  open: boolean
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  msg: string
}

const ConfirmationModal = ({ open, onClose, msg }: NewUserModalProps) => {
  const modalStyles = {
    inputFields: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '20px',
      marginBottom: '15px',
      '.MuiFormControl-root': {
        marginBottom: '20px',
      },
    },
  }

  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      <Typography component='p'>
        {msg}
      </Typography>
    </Box>
  )

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title='Cadastro efetuado com sucesso!'
      subTitle=""
      content={getContent()}
      onSubmit={onClose}
    />
  )
}

export default ConfirmationModal
