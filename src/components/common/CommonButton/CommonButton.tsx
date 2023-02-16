import { Button } from '@mui/material'
import React from 'react'
import { SxProps } from '@mui/system'
import { ButtonProps } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export type CommonButtonProps = {
  type?: ButtonProps['type']
  children: React.ReactNode
  color?: ButtonProps['color']
  disabled?: boolean
  size?: ButtonProps['size']
  variant: ButtonProps['variant']
  sx?: SxProps
  fullWidth?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  startIcon?: React.ReactNode
}

const CommonButton: React.FC<CommonButtonProps> = ({
  type,
  children,
  color,
  disabled,
  size,
  variant,
  sx,
  onClick,
  fullWidth,
  startIcon,
}) => {
  return (
    <Button
      startIcon={startIcon}
      type={type}
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      sx={sx}
      onClick={onClick}
      fullWidth={fullWidth}>
      {children}
    </Button>
  )
}

export default CommonButton
