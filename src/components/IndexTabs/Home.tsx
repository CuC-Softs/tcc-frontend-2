// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import Post from '../Post'

const Home: React.FC = () => {
  return (
    <Container>
      <Posts>
        <li>
          <Post
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt, maxime et quae odit esse expedita doloremque ex tenetur placeat alias sit est consequatur eaque molestiae! Fugiat provident recusandae eaque?'
            }
            username="Placeholder"
            whenPosted="36 min"
            image="/background.svg"
            profileImage="/background.svg"
            comments={[
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                profileImage: '/background.svg',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              }
            ]}
          />
        </li>
        <li>
          <Post
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt, maxime et quae odit esse expedita doloremque ex tenetur placeat alias sit est consequatur eaque molestiae! Fugiat provident recusandae eaque?'
            }
            username="Placeholder"
            whenPosted="36 min"
            image="/background.svg"
            profileImage="/background.svg"
            comments={[
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                profileImage: '/background.svg',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              }
            ]}
          />
        </li>
        <li>
          <Post
            description={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque deserunt, maxime et quae odit esse expedita doloremque ex tenetur placeat alias sit est consequatur eaque molestiae! Fugiat provident recusandae eaque?'
            }
            username="Placeholder"
            whenPosted="36 min"
            image="/background.svg"
            profileImage="/background.svg"
            comments={[
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                liked: true,
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                profileImage: '/background.svg',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              },
              {
                likes: 2222,
                dislikes: 2222,
                username: 'Placegold',
                whenPosted: '36 min',
                text: 'AAAAAAAAAAAAAAAAAAAAAAAAA'
              }
            ]}
          />
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
