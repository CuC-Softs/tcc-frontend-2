import { Typography } from '@material-ui/core'
import { HTMLProps } from 'react'
import styled from 'styled-components'

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  pageName: string
}

const Header: React.FC<HeaderProps> = ({ pageName, children }) => {
  return (
    <Container>
      <div className="content">
        <img src="" alt="profile image" />
        {children}
        <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
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
  position: absolute;
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

  img {
    background-color: #c4c4c4;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }

  .content {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: fit-content;
    max-width: 1170px;
  }
`
