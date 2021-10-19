// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import Post from '../Post'

const Home: React.FC = () => {
  return (
    <Container>
      <Posts>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </Posts>
    </Container>
  )
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
`

const Posts = styled.ul`
  list-style: none;
  max-width: 75rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
