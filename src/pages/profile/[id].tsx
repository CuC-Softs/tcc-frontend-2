import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core'
import { Person } from '@material-ui/icons'
import styled from 'styled-components'

const useStyles = makeStyles(() => ({
  follow: {
    width: '70%',
    height: '3rem',
    fontSize: '2rem',
    marginTop: '1rem',
    textTransform: 'capitalize'
  }
}))

const profile: React.FC = () => {
  const classes = useStyles()

  return (
    <Container>
      <div className="profile">
        <img
          className="banner"
          src="https://www.correio24horas.com.br//fileadmin/_processed_/0/c/csm_nego_nei_cfb7caaac3.jpg"
          alt="banner"
        />
        <div className="image-and-username">
          <img
            src="https://pbs.twimg.com/media/EeTDgb4WoAAcrmS.jpg"
            alt=""
            className="profile-image"
          />
          <h5>
            Placeholder da Silve
            <br /> - @Placeholder
          </h5>
          <Button
            variant="contained"
            color="primary"
            className={classes.follow}
            startIcon={<Person />}
          >
            Follow
          </Button>
          <p style={{ marginTop: '1rem' }}>1000 followers</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <span className="label">- Bio</span>
          <Bio>
            <h1 className="title">Bio de Placeholder</h1>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              nam totam quae ut molestias maxime dolorem laboriosam dolore
              pariatur in. Ad, molestias odit esse accusamus quod facilis
              recusandae fugit pariatur.
            </p>
          </Bio>
        </div>
        <div className="card">
          <span className="label">- Groups</span>
          <ul className="group-list">
            <li className="group">
              <Card style={{ height: '100%', borderRadius: '1rem' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://estatico.precolandia.com.br/images/product/Peneira-de-Plastico-155cm-Branca-Utility-pre%C3%A7olandia-739189-0d.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Open
                  </Button>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Ask to Join
                  </Button>
                </CardActions>
              </Card>
            </li>
            <li className="group">
              <Card style={{ height: '100%', borderRadius: '1rem' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://estatico.precolandia.com.br/images/product/Peneira-de-Plastico-155cm-Branca-Utility-pre%C3%A7olandia-739189-0d.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Open
                  </Button>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Ask to Join
                  </Button>
                </CardActions>
              </Card>
            </li>
            <li className="group">
              <Card style={{ height: '100%', borderRadius: '1rem' }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://estatico.precolandia.com.br/images/product/Peneira-de-Plastico-155cm-Branca-Utility-pre%C3%A7olandia-739189-0d.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ fontSize: '1.3rem' }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Open
                  </Button>
                  <Button size="medium" style={{ fontSize: '1.27rem' }}>
                    Ask to Join
                  </Button>
                </CardActions>
              </Card>
            </li>
          </ul>
        </div>
      </div>
      <div className="background" />
    </Container>
  )
}

export default profile

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  .background {
    background: url('/background.svg');
    background-size: cover;
    z-index: -9999;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .card-container {
    height: 100%;
    width: 100%;
    display: flex;
    padding: 2rem;
    max-width: 100%;
    min-height: fit-content;
    justify-content: center;
    flex: 1;

    .card {
      height: 50rem;
      min-width: 30rem;
      width: 100%;
      border-radius: 1rem;
      box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
      background: ${(p) => p.theme.palette.background.default};
      margin-right: auto;
      margin-top: 1rem;

      position: relative;

      .label {
        position: absolute;
        top: -5%;
        left: 1rem;
        font-size: 1.8rem;
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
        color: #fff;
      }

      .group-list {
        list-style: none;
        display: flex;
        padding: 2rem;
        height: 100%;
        overflow-x: auto;

        .group {
          width: 35rem;
          min-width: 35rem;
          height: 100%;

          & + li {
            margin-left: 2rem;
          }
        }
      }
    }

    .card:first-of-type {
      width: 30%;
      margin-right: 2rem;
    }
  }

  .banner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 36rem;
    background-size: cover;
    background-position: center;
    font-size: 0;
    background-color: #c4c4c4;
    z-index: -1;
    object-fit: cover;
    background-repeat: no-repeat;
  }

  .profile {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 36rem;
    height: 36rem;
    padding: 2rem;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    .image-and-username {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: fit-content;
      height: 100%;
      position: relative;

      h5 {
        font-size: 2rem;
        color: ${(p) => p.theme.palette.text.primary};
        margin-top: 0.8rem;
        text-align: center;
      }

      .profile-image {
        border-radius: 50%;
        border: none;
        padding: none;
        min-width: fit-content;
        min-height: fit-content;
        box-shadow: 0 4px 3px rgba(0, 0, 0, 0.3);
        width: 18rem;
        height: 18rem;
        background-position: center;
        background-size: cover;
        font-size: 0;
        background: #fff;
        object-fit: cover;
        background-repeat: no-repeat;
      }
    }
  }
`

const Bio = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  .title {
    font-size: 2rem;
    color: ${(p) => p.theme.palette.text.primary};
    font-weight: 600;
    opacity: 0.8;
  }

  .text {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: ${(p) => p.theme.palette.text.secondary};
    line-height: 2rem;
  }
`
