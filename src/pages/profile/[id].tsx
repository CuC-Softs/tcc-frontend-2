import { Button, makeStyles, Theme } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import styled from 'styled-components'

const useStyles = makeStyles((theme: Theme) => ({
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
      <img
        className="banner"
        src="https://www.correio24horas.com.br//fileadmin/_processed_/0/c/csm_nego_nei_cfb7caaac3.jpg"
        alt="banner"
      />
      <div className="profile">
        <div className="image-and-username">
          <img
            src="https://pbs.twimg.com/media/EeTDgb4WoAAcrmS.jpg"
            alt=""
            className="profile-image"
          />
          <h5>@Placeholder</h5>
          <Button
            variant="contained"
            color="primary"
            className={classes.follow}
            startIcon={<Person />}
          >
            Follow
          </Button>
        </div>
        <div className="profile-data">
          <h5 className="name">Placeholder da silva</h5>
        </div>
      </div>
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

    .profile-data {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 2rem;

      .name {
        font-size: 1.8rem;
        color: ${(p) => p.theme.palette.text.primary};
        margin-top: 0.8rem;
      }
    }
  }
`
