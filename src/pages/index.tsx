import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'
import styled from 'styled-components'

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="main">
        <div className="text">
          <h1 className="title">IFConnect</h1>
          <p className="subtitle">A direct conection from IF to IF </p>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <Card style={{ height: '100%', width: '100%', borderRadius: '1rem' }}>
            <CardMedia
              component="img"
              height="240"
              image={
                'https://previews.123rf.com/images/dashk/dashk1507/dashk150700059/43042655-happy-people-in-large-group-wallpaper-black-and-white-vector-illustration.jpg'
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                Sign In
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: '1.8rem', fontWeight: 300 }}
              >
                {`Already have an account?`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                variant="outlined"
                href="/signin"
                style={{ fontSize: '2.5rem', margin: 'auto' }}
              >
                Enter
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="card">
          <Card style={{ height: '100%', width: '100%', borderRadius: '1rem' }}>
            <CardMedia
              component="img"
              height="240"
              image={
                'https://previews.123rf.com/images/dashk/dashk1507/dashk150700059/43042655-happy-people-in-large-group-wallpaper-black-and-white-vector-illustration.jpg'
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h2" component="div">
                Sign Up
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ fontSize: '1.8rem', fontWeight: 300 }}
              >
                {`Doesn't have an account?`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="medium"
                variant="outlined"
                href="/signup"
                style={{ fontSize: '2.5rem', margin: 'auto' }}
              >
                Join
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Landing

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;

  .main {
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: url('https://previews.123rf.com/images/dashk/dashk1507/dashk150700059/43042655-happy-people-in-large-group-wallpaper-black-and-white-vector-illustration.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: overlay;

    .text {
      background: ${(p) => p.theme.palette.background.default};
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);

      .title {
        font-size: 10rem;
        color: ${(p) => p.theme.palette.text.primary};
        width: 100%;
        text-align: center;
      }

      .subtitle {
        font-size: 2.5rem;
        color: ${(p) => p.theme.palette.text.secondary};
        font-weight: 300;
        text-align: center;
        width: 100%;
      }
    }
  }

  .cards {
    min-height: 100vh;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    .card {
      width: 40%;
      height: 70% !important;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 2rem;
      box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.1);
    }
  }
`
