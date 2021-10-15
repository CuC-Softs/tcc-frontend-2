// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import theme from '../styles/theme'

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
  button: { margin: '8px 0', color: theme.palette.background.default },
  textField: { padding: '0 10px' },
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
  password: Yup.string().required('Required Field')
})

const SignIn: React.FC = () => {
  const classes = useStyles()

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
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
            <h2>Sign In</h2>
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
            InputProps={{ inputProps: { style: { paddingLeft: 10 } } }}
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
            InputProps={{ inputProps: { style: { paddingLeft: 10 } } }}
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
            >
              Sign in
            </Button>
          </form>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography style={{ margin: 0, marginTop: 'auto' }}>
            {' '}
            Do you have an account ?
            <Link style={{ marginLeft: 5 }} href="#">
              Sign Up
            </Link>
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

  a {
    font-size: 100%;
  }
`
