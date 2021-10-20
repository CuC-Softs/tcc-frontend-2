// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons'
import styled from 'styled-components'
import theme from '../../styles/theme'
import Link from 'next/link'

export interface CommentsProps {
  username: string
  whenPosted: string
  liked?: boolean
  likes?: number
  disliked?: boolean
  dislikes?: number
  profileImage?: string
  text: string
}

const Comments: React.FC<CommentsProps> = ({
  disliked,
  dislikes,
  liked,
  likes,
  text,
  username,
  whenPosted,
  profileImage
}) => {
  const [wasLiked, setWasLiked] = useState(liked || false)

  const [wasDisliked, setWasDisliked] = useState(disliked || false)

  const handleRating = (type: 'positive' | 'negative') => {
    if (type === 'positive') {
      if (wasDisliked) {
        setWasDisliked(false)
        setWasLiked(true)
      }
      if (wasLiked) {
        setWasLiked(false)
      } else {
        setWasLiked(true)
      }
    } else {
      if (wasLiked) {
        setWasLiked(false)
        setWasDisliked(true)
      }
      if (wasDisliked) {
        setWasDisliked(false)
      } else {
        setWasDisliked(true)
      }
    }
  }

  return (
    <Container>
      <div className="profile-image">
        <Link href="#">
          <img src={profileImage || '/no-profile-image.png'} alt="" />
        </Link>
      </div>
      <div className="profile-body">
        <div className="header">
          <Link href="#">
            <span>{username}</span>
          </Link>
          <span>{whenPosted}</span>
        </div>
        <div className="post">
          <span>{text}</span>
          <div className="actions">
            <div className="rating">
              <button type="button" onClick={() => handleRating('positive')}>
                <ArrowUpward
                  style={{
                    color: wasLiked ? theme.palette.primary.main : undefined
                  }}
                />
              </button>
              <span>{wasLiked ? likes + 1 : likes}</span>
            </div>
            <div className="rating">
              <button type="button" onClick={() => handleRating('negative')}>
                <ArrowDownward
                  style={{
                    color: wasDisliked ? theme.palette.error.main : undefined
                  }}
                />
              </button>
              <span>{wasDisliked ? dislikes + 1 : dislikes}</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
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

      span:first-child {
        cursor: pointer;
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
