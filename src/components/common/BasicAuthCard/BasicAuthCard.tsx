import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Grid, Paper, SxProps, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'
import CommonButton from '../CommonButton/CommonButton'
import { signInStyles } from './styles'

type BasicAuthCardProps = {
  children: JSX.Element
  title: string
  subtitle?: string
  toLogin?: boolean
  email?: string
  width?: number
  sx?: SxProps
}

const BasicAuthCard = ({
  children,
  title,
  subtitle,
  toLogin,
  email,
  width,
  sx,
}: BasicAuthCardProps) => {
  const theme = useTheme()
  const navigate = useNavigate()

  const handleToLogin = () => {
    navigate(`/signin`)
  }

  return (
    <Grid
      sx={{
        ...signInStyles.wrapperStyle,
        ...sx,
      }}
    >
      {toLogin && (
        <CommonButton
          onClick={handleToLogin}
          startIcon={<ArrowBackIcon />}
          sx={{
            color: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
          }}
          variant='outlined'
        >
          To Log In
        </CommonButton>
      )}
      <Paper
        elevation={10}
        sx={{ ...signInStyles.paperStyle, minWidth: '100%' }}
      >
        <Grid
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid alignContent={'center'}>
            <Typography variant='h6' sx={{ fontSize: '24px' }}>
              {title}
            </Typography>
          </Grid>
          <Grid alignContent={'center'}>
            {email ? (
              <Typography
                align='center'
                variant='subtitle1'
                color='primary'
                mt={2}
                mb={2}
                sx={{ fontSize: '14px' }}
              >
                We have sent an instruction to{' '}
                <a href={`mailto:${email}`}>{email}</a> to reset your password.
              </Typography>
            ) : (
              <Typography
                align='center'
                variant='subtitle1'
                color='primary'
                mt={2}
                mb={2}
                sx={{ fontSize: '14px' }}
              >
                {subtitle}
              </Typography>
            )}
          </Grid>
          {children}
        </Grid>
      </Paper>
    </Grid>
  )
}

export default BasicAuthCard
