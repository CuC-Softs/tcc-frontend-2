/* eslint-disable camelcase */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  makeStyles,
  FormHelperText
} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import theme from '../styles/theme'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: '30px 20px',
    height: '70vh',
    minHeight: 290,
    minWidth: 300,
    width: '28vw',
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
  confirm_password: string
  email: string
  gender: string
  terms: boolean
  position?: string
}

const initialValues: LoginProps = {
  username: '',
  password: '',
  confirm_password: '',
  email: '',
  gender: '',
  terms: false,
  position: 'student'
}

const schema = Yup.object().shape({
  username: Yup.string().required('Required Field.'),
  password: Yup.string()
    .required('Required Field.')
    .min(8, 'You have type a password with at least 6 characters.'),
  confirm_password: Yup.string()
    .required('Required Field.')
    .oneOf([Yup.ref('password'), null], 'Passwords must match.'),
  email: Yup.string().required('Required Field').email('Email must be valid.'),
  gender: Yup.string().required('Required Field.'),
  terms: Yup.boolean()
    .required('Required Field.')
    .isTrue('You have to accept these terms.')
})

const SignUp: React.FC = () => {
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
      (!!formik.errors.password && formik.touched.password) ||
      (!!formik.errors.confirm_password && formik.touched.confirm_password) ||
      (!!formik.errors.email && formik.touched.email) ||
      (!!formik.errors.gender && formik.touched.gender) ||
      (!!formik.errors.terms && formik.touched.terms)
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
        <Paper className={classes.paperStyle} elevation={5}>
          <Grid>
            <Avatar
              className={classes.avatarStyle}
              style={{
                backgroundColor: formHaveError
                  ? theme.palette.error.main
                  : undefined
              }}
            >
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <Typography variant="h2" style={{ margin: 0 }}>
              Sign Up
            </Typography>
            <Typography
              variant="caption"
              gutterBottom
              style={{ fontSize: '1rem' }}
            >
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form noValidate onSubmit={formik.handleSubmit}>
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
              placeholder="Enter Username"
              type="text"
              fullWidth
              required
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
            />
            <TextField
              id="email"
              name="email"
              onChange={formik.handleChange}
              autoComplete="email"
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              autoFocus
              value={formik.values.email}
              label="Email"
              placeholder="Enter email"
              type="email"
              fullWidth
              required
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
            />
            <FormControl
              component="fieldset"
              style={{ marginTop: 5 }}
              error={formik.touched.gender && !!formik.errors.gender}
            >
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                style={{ display: 'initial' }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
              {formik.touched.gender && !!formik.errors.gender && (
                <FormHelperText error>{formik.errors.gender}</FormHelperText>
              )}
            </FormControl>
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
            <TextField
              id="confirm_password"
              name="confirm_password"
              onChange={formik.handleChange}
              autoComplete="confirm_password"
              error={
                formik.touched.confirm_password &&
                !!formik.errors.confirm_password
              }
              helperText={
                formik.touched.confirm_password &&
                formik.errors.confirm_password
              }
              autoFocus
              value={formik.values.confirm_password}
              label="Confirm Password"
              placeholder="Repeat your password"
              type="password"
              fullWidth
              required
              InputProps={{
                inputProps: {
                  className: classes.textField
                }
              }}
            />
            <FormControl component="fieldset" style={{ marginTop: 5 }}>
              <FormLabel component="legend">Position</FormLabel>
              <RadioGroup
                aria-label="position"
                id="position"
                name="position"
                value={formik.values.position}
                onChange={formik.handleChange}
                style={{ display: 'initial' }}
              >
                <FormControlLabel
                  value="teacher"
                  control={<Radio />}
                  label="Teacher"
                />
                <FormControlLabel
                  value="employee"
                  control={<Radio />}
                  label="Employee"
                />
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  id="terms"
                  name="terms"
                  autoFocus
                  color="primary"
                  value={formik.values.terms}
                  onChange={formik.handleChange}
                />
              }
              label="I accept the terms and conditions."
              className={classes.radio}
            />
            {formik.touched.terms && !!formik.errors.terms && (
              <FormHelperText error>{formik.errors.terms}</FormHelperText>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={formHaveError}
              fullWidth
            >
              Sign up
            </Button>
          </form>
          <Typography style={{ margin: 0, marginTop: 'auto' }}>
            Do you already have an account ?<Link href="/signin">Sign In</Link>
          </Typography>
        </Paper>
      </Grid>
    </Container>
  )
}

export default SignUp

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
