import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { HTMLProps } from 'react'
import styled from 'styled-components'
import ProfileModal from './ProfileModal'
import { useAuth } from '../contexts/AuthContext'

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  pageName: string
  image?: string
}

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      textTransform: 'capitalize',
      color: theme.palette.background.default
    }
  })
)

const Header: React.FC<HeaderProps> = ({
  image,
  pageName,
  children,
  ...rest
}) => {
  const classes = useStyles()
  const { user } = useAuth()

  return (
    <Container>
      <div className="content" {...rest}>
        <ProfileModal
          id={user?.id || undefined}
          name="Placeholder da Silva"
          username="Placeholder"
          bio={{
            title: 'Bio muito legal',
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }}
          image="https://pbs.twimg.com/media/EWTpVn8XkAEWZZS.jpg"
          banner="https://roadie-metal.com/wp-content/uploads/2020/12/edu-falaschi-vera-cruz-809x1024.jpg"
          followers={1000}
          groups={[]}
        >
          <img
            src={image || 'https://pbs.twimg.com/media/EWTpVn8XkAEWZZS.jpg'}
            alt="profile image"
          />
        </ProfileModal>
        {children}
        <Typography variant="h4" className={classes.title}>
          {pageName}
        </Typography>
      </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: fit-content;
  justify-content: center;
  min-height: 5.5rem;
  left: 0;
  right: 0;
  color: ${(p) => p.theme.palette.text.primary};
  background: ${(p) => p.theme.palette.primary.main};
  background: linear-gradient(
    0deg,
    rgba(92, 170, 96, 1) 0%,
    rgba(102, 187, 106, 1) 50%
  );

  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  z-index: 1;

  img {
    background-color: #c4c4c4;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    font-size: 0rem;
  }

  .content {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: fit-content;
    max-width: 117rem;
    position: relative;
  }
`
