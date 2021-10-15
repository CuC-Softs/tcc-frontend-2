// eslint-disable-next-line no-use-before-define
import React from 'react'
import { darken, Grid, makeStyles, Paper } from '@material-ui/core'
import styled from 'styled-components'
import { Home } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  container: { width: '100%', height: '100%' },
  paper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 12
  }
}))

const pages: React.FC = () => {
  const classes = useStyles()

  return (
    <Container>
      <Grid className={classes.container}>
        <Paper elevation={2} className={classes.paper}>
          <div className="main-content">
            <Side>
              <img src="" alt="" />
            </Side>
            <Body>
              <Height>
                <h6>Placeholder</h6>
                <span>@Placeholder - 36 min</span>
              </Height>
            </Body>
          </div>
          <Options>
            <button className="option">
              <Home />
            </button>
            <button className="option">
              <Home />
            </button>
            <button className="option">
              <Home />
            </button>
            <button className="option">
              <Home />
            </button>
          </Options>
        </Paper>
      </Grid>
    </Container>
  )
}

export default pages

const Container = styled.div`
  width: 60%;
  height: 60%;
  display: flex;
  font-size: 4rem;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .main-content {
    display: flex;
    height: 100%;
    width: 100%;
  }
`

const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-right: 16px;
  padding-left: 16px;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #c3c3c3;
    border: none;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 16px;
`

const Options = styled.div`
  width: 100%;
  padding-top: 0.5rem;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  .option {
    padding: 0;
    max-height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    text-decoration: none;
    color: ${(p) => p.theme.palette.secondary.main};
    padding: 0.5rem;

    :hover {
      background-color: ${(p) =>
        darken(p.theme.palette.background.default, 0.03)};
      transition: background-color 300ms ease;
    }
  }

  svg {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0 !important;
    color: ${(p) => p.theme.palette.secondary.main};
  }
`

const Height = styled.div`
  width: 100%;
  color: ${(p) => p.theme.palette.text.secondary};
  display: flex;

  * {
    font-size: 1.5rem;
  }

  h6 {
    font-weight: bold;
    color: ${(p) => p.theme.palette.text.primary};
  }

  span {
    margin-left: 0.5rem;
  }
`
