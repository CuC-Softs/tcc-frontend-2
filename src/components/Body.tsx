// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

const Body: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Body

const Container = styled.div`
  width: 100%;
  background-color: #ebebeb;
  display: flex;
  position: absolute;
  top: 7rem;
  bottom: 5.7rem;
  overflow-y: auto;
`
