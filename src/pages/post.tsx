// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { Grid, makeStyles, Paper } from '@material-ui/core'
import styled from 'styled-components'
import { Home } from '@material-ui/icons'
import ShowMoreText from 'react-show-more-text'

const useStyles = makeStyles(() => ({
  container: { width: '100%', height: '100%' },
  paper: {
    width: '100%',
    height: '100%',
    minWidth: 'fit-content',
    minHeight: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 12,
    position: 'relative'
  }
}))

const pages: React.FC = () => {
  const classes = useStyles()

  const [postDataRef, setPostDataRef] = useState<HTMLDivElement | null>(null)

  return (
    <Container>
      <Grid className={classes.container}>
        <Paper elevation={2} className={classes.paper}>
          <div className="main-content">
            <Side type="button">
              <img src="" alt="profile image" />
            </Side>
            <Body>
              <Header>
                <h6>Placeholder</h6>
                <span>@Placeholder - 36 min</span>
              </Header>
              <div className="post-data" ref={setPostDataRef}>
                <ShowMoreText
                  more="Show More"
                  less="Show Less"
                  expanded={false}
                  width={postDataRef?.offsetWidth - 10}
                  className="post-text"
                  truncatedEndingComponent={'... '}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias repellat quae, quam, fugit placeat sed quos aliquam
                  doloribus praesentium nisi facilis com
                </ShowMoreText>
                <img src="/background.svg" alt="post image" />
              </div>
            </Body>
          </div>
          <Options>
            <div className="option">
              <button
                type="button"
                onClick={() => console.log(postDataRef?.offsetWidth)}
              >
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
  padding: 0.5rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .main-content {
    display: flex;
    height: 90%;
    width: 100%;
  }
`

const Side = styled.button`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-right: 16px;
  padding-left: 16px;
  background: none;
  border: none;
  text-decoration: none;
  color: unset;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #c3c3c3;
    border: none;
    font-size: 0;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  flex-direction: column;

  .post-data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    * {
      font-size: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      border-radius: 3rem;
      object-fit: cover;
      font-size: 0px !important;
    }

    .post-text {
      font-size: 100%;
      font-size: 1.4rem;
    }
  }
`

const Options = styled.div`
  width: 100%;
  height: 10%;
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

const Header = styled.div`
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
