import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import React, { ReactElement } from 'react'
import CommonButton from '../CommonButton/CommonButton'
import { modalStyles } from './styles'

export type BasicModalProps = {
  open: boolean
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
  title: string
  subTitle: string
  content: ReactElement
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const BasicModal = ({
  open,
  onClose,
  title,
  subTitle,
  content,
  onSubmit,
}: BasicModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant='h6' component='h2'>
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <CommonButton variant='contained' onClick={onSubmit}>
            Fechar
          </CommonButton>
          {/* <CommonButton variant='contained' onClick={onClose}>
            Cancel
          </CommonButton> */}
        </Box>
      </Box>
    </Modal>
  )
}

export default BasicModal
