// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

const Comments: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Comments

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  overflow-y: auto;

  li + li {
    margin-top: 2rem;
  }
`
