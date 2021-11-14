import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Modal,
  Typography
} from '@material-ui/core'
import { Close, Person } from '@material-ui/icons'
import { useState } from 'react'
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

interface Group {
  id: number
  name: string
  description: string
  image: string
  members: number
  isOwner: string
  isFollowing: boolean
}

interface ProfileModalProps {
  name: string
  username: string
  bio: { title: string; content: string }
  image: string
  banner: string
  followers: number
  isFollowing?: boolean
  isSelf?: boolean
  groups: Group[]
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  children,
  name,
  username,
  bio,
  image,
  banner,
  followers,
  isFollowing,
  isSelf,
  groups
}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleModal = () => setOpen(!open)

  return (
    <>
      <ModalButton onClick={handleModal}>{children}</ModalButton>
      <Modal open={open} onClose={handleModal}>
        <Container>
          <CloseModal onClick={handleModal}>
            <Close />
          </CloseModal>
          <div className="background" />
          <div className="profile">
            <img className="banner" src={banner} alt="banner" />
            <div className="image-and-username">
              <img src={image} alt="" className="profile-image" />
              <h5>
                {name}
                <br /> - @{username}
              </h5>
              {!isSelf && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.follow}
                  startIcon={<Person />}
                >
                  {isFollowing ? 'UnFollow' : 'Follow'}
                </Button>
              )}
              <p style={{ marginTop: '1rem' }}>{followers} followers</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card">
              <span className="label">- Bio</span>
              <Bio>
                <h1 className="title">{bio.title}</h1>
                <p className="text">{bio.content}</p>
              </Bio>
            </div>
            <div className="card">
              <span className="label">- Groups</span>
              <ul className="group-list">
                {groups.map((e, i) => (
                  <li key={e.id} className="group">
                    <Card style={{ height: '100%', borderRadius: '1rem' }}>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={e.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h4" component="div">
                          {e.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          style={{ fontSize: '1.3rem' }}
                        >
                          {e.description}
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
                ))}
                <li className="group">
                  <Card style={{ height: '100%', borderRadius: '1rem' }}>
                    <CardMedia
                      component="img"
                      alt="Create Group"
                      height="140"
                      image={
                        'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
                      }
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div">
                        Create Group
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="medium"
                        style={{ fontSize: '1.5rem' }}
                        color="primary"
                        variant="outlined"
                      >
                        Create
                      </Button>
                    </CardActions>
                  </Card>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Modal>
    </>
  )
}

export default ProfileModal

const ModalButton = styled.button`
  background: none;
  min-width: fit-content;
  min-height: fit-content;
  border: none;
`

const CloseModal = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
  color: #fff;
  width: 5rem;
  height: 5rem;
  transition: background-color 0.15s ease-in-out;

  svg {
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    height: 100%;
  }

  :hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

const Container = styled.div`
  width: 95%;
  height: 95%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${(p) => p.theme.palette.background.default};
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.3s ease;

  .background {
    background: url('/background.svg');
    background-size: cover;
    height: 100%;
    max-height: 100vh;
    width: 100%;
    position: fixed;
    top: 36rem;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(3px) brightness(0.8);
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

    @media (max-width: 660px) {
      flex-direction: column;

      .card {
        margin-top: 4rem;
        width: 100% !important;
      }

      .label {
        top: -3rem !important;
      }
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
    background: rgba(0, 0, 0, 0.2);

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
        color: ${(p) => p.theme.palette.background.default};
        margin-top: 0.8rem;
        text-align: center;
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
      }

      p {
        color: ${(p) => p.theme.palette.background.default};
        text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
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
