// eslint-disable-next-line no-use-before-define
import React from 'react'
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

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    padding: 20,
    height: '70vh',
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

const SignIn: React.FC = () => {
  const classes = useStyles()
  return (
    <Container>
      <Grid>
        <Paper elevation={5} className={classes.paperStyle}>
          <Grid>
            <Avatar className={classes.avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            InputProps={{ inputProps: { style: { paddingLeft: 10 } } }}
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            InputProps={{ inputProps: { style: { paddingLeft: 10 } } }}
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
            className={classes.radio}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.button}
            fullWidth
          >
            Sign in
          </Button>
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
