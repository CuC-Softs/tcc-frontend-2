// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'

const Comments: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

export default Comments

const Container = styled.li`
  width: 100%;
  height: fit-content;
  padding: 0 5%;
  display: flex;
  flex-direction: row;

  .profile-image {
    height: 100%;
    margin-right: 2rem;
    width: fit-content;

    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      font-size: 0;
      background: #c4c4c4;
    }
  }

  .profile-body {
    width: 100%;
    height: fit-content;

    .header {
      width: 100%;
      padding-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      color: ${(p) => p.theme.palette.text.primary};

      span {
        font-size: 1.2rem;
      }

      span + span {
        color: ${(p) => p.theme.palette.text.secondary};
      }
    }

    .post {
      color: ${(p) => p.theme.palette.text.primary};

      .actions {
        display: flex;
        width: 100%;

        .rating {
          display: flex;
          align-items: center;

          & + div {
            margin-left: 0.5rem;
          }
        }
      }

      span {
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
      }

      button {
        border: none;
        background: none;
        transition: 200ms ease;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        padding: 0.5rem;
        display: flex;

        svg {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
          padding-bottom: 0 !important;
          margin-bottom: 0 !important;
          margin-right: 0.5rem;
        }

        :hover {
          background: rgba(0, 0, 0, 0.2);
        }
        :active {
          background: rgba(0, 0, 0, 0.1);
          transition: 100ms;
        }
      }

      display: flex;
      flex-direction: column;
    }
  }
`
