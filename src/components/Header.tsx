import { createStyles, makeStyles, Typography } from '@material-ui/core'
import { HTMLProps } from 'react'
import styled from 'styled-components'

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

  return (
    <Container>
      <div className="content" {...rest}>
        <img src={image} alt="profile image" />
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
  }
`
