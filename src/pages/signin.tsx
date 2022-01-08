// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  makeStyles
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import theme from '../styles/theme'
import Link from 'next/link'
import api from '../services/api'
import withReactContent from 'sweetalert2-react-content'
import sweetAlert2 from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: '70vh',
    minHeight: 290,
    minWidth: 280,
    width: '25vw',
    margin: '20px auto',
    overflowY: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  avatarStyle: { backgroundColor: theme.palette.primary.main, marginBottom: 8 },
  button: {
    margin: '8px 0',
    color: theme.palette.background.default,
    fontSize: '1.5rem'
  },
  textField: {
    height: '2.5rem',
    paddingLeft: 10,
    fontSize: '1.2rem'
  },
  radio: { lineHeight: 'normal' }
}))

interface LoginProps {
  username: string
  password: string
  remember?: boolean | false
}

const initialValues: LoginProps = {
  username: '',
  password: '',
  remember: false
}

const schema = Yup.object().shape({
  username: Yup.string().required('Required Field'),
  password: Yup.string()
    .required('Required Field')
    .min(8, 'Password must be at least 8 characters')
})

const SignIn: React.FC = () => {
  const classes = useStyles()

  const swal = withReactContent(sweetAlert2)

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        await api.post('/auth', {
          email: values.username,
          password: values.password
        })
        alert('Login Successful')
        // Implement auth context}
      } catch (err) {
        swal.fire({
          title: (
            <p>Error! {err.response.data.errors[0].message || err.message}</p>
          ),
          icon: 'error',
          iconColor: 'red'
        })
      }
    },
    validationSchema: schema
  })

  const [formHaveError, setFormHaveError] = useState(false)

  useEffect(() => {
    if (
      (!!formik.errors.username && formik.touched.username) ||
      (!!formik.errors.password && formik.touched.password)
    ) {
      setFormHaveError(true)
    } else {
      if (formHaveError) {
        setFormHaveError(false)
      }
    }
  }, [formik.errors, formik.touched])

  return (
    <Container>
      <Grid>
        <Paper elevation={5} className={classes.paperStyle}>
          <Grid>
            <Avatar
              className={classes.avatarStyle}
              style={{
                backgroundColor: formHaveError
                  ? theme.palette.error.main
                  : undefined
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h2">Sign In</Typography>
          </Grid>
          <TextField
            id="username"
            name="username"
            onChange={formik.handleChange}
            autoComplete="username"
            error={formik.touched.username && !!formik.errors.username}
            helperText={formik.touched.username && formik.errors.username}
            autoFocus
            value={formik.values.username}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            InputProps={{
              inputProps: {
                className: classes.textField
              }
            }}
          />
          <TextField
            id="password"
            name="password"
            onChange={formik.handleChange}
            autoComplete="password"
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            autoFocus
            value={formik.values.password}
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            InputProps={{
              inputProps: {
                className: classes.textField
              }
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                id="remember"
                name="remember"
                autoFocus
                color="primary"
                value={formik.values.remember}
                onChange={formik.handleChange}
              />
            }
            label="Remember me"
            className={classes.radio}
          />
          <form noValidate onSubmit={formik.handleSubmit}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.button}
              fullWidth
              disabled={formHaveError}
            >
              Sign in
            </Button>
          </form>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography style={{ margin: 0, marginTop: 'auto' }}>
            Do you have an account ?<Link href="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  )
}

export default SignIn

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
  background: url('/background.svg');
  background-size: cover;

  a {
    font-size: 100%;
    color: ${(p) => p.theme.palette.primary.dark};
  }
`
