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
            <div className="option">
              <button>
                <Home />
                <span>19</span>
              </button>
            </div>
            <div className="option">
              <button>
                <Home />
                <span>19</span>
              </button>
            </div>
            <div className="option">
              <button>
                <Home />
                <span>19</span>
              </button>
            </div>
            <div className="option">
              <button>
                <Home />
                <span>19</span>
              </button>
            </div>
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
    padding: 0.5rem;

    button {
      background: none;
      border: none;
      border-radius: 50%;
      color: ${(p) => p.theme.palette.text.secondary};
      transition: 300ms ease;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 200ms ease;

      :hover {
        color: ${(p) => p.theme.palette.secondary.main};

        svg {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }

      svg {
        width: 3.3rem;
        height: 3.3rem;
        margin: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background-color 300ms ease;
      }

      span {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }
    }
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
