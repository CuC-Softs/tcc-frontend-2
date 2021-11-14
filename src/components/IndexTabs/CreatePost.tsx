// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  Fab,
  Grid,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  TextField
} from '@material-ui/core'
import styled from 'styled-components'
import { ChatBubbleOutline, Favorite, Send, Share } from '@material-ui/icons'
import { DropzoneArea } from 'material-ui-dropzone'
import { useFormik } from 'formik'
import theme from '../../styles/theme'

interface PostProps {
  username: string
  group: string
  profileImage?: string
  description: string
  image?: File | File[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = makeStyles((theme) => ({
  container: { width: '100%', height: '100%' },
  paper: {
    width: '100%',
    height: '100%',
    minWidth: 'fit-content',
    minHeight: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 12,
    position: 'relative'
  },
  description: {
    width: '100%',
    minHeight: '4rem',
    borderRadius: '0.4rem',
    margin: '1rem 0'
  },
  post: {
    height: '5.5rem',
    fontSize: '2rem;',
    marginLeft: '3rem',
    paddingLeft: '3rem',
    paddingRight: '3rem'
  },

  previewGridDropzone: {
    fontSize: '2rem;'
  }
}))

const CreatePost: React.FC = () => {
  const classes = useStyles()

  const post: PostProps = {
    username: '@Placeholder',
    group: 'Select a group',
    profileImage: '',
    description: '',
    image: undefined
  }

  const formik = useFormik({
    initialValues: post,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const [anchorEl, setAnchorEl] = React.useState(null)
  const openSelectGroup = Boolean(anchorEl)
  const handleClickSelectGroup = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseSelectGroup = () => {
    setAnchorEl(null)
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Container>
        <Grid className={classes.container}>
          <Paper elevation={2} className={classes.paper}>
            <div className="main-content">
              <Side type="button">
                <img
                  src={post.profileImage || '/no-profile-image.png'}
                  alt="profile image"
                />
              </Side>
              <Body>
                <Header>
                  <h6>{post.username}</h6> <span>in</span>{' '}
                  <IconButton
                    onClick={handleClickSelectGroup}
                    style={{ padding: 0 }}
                  >
                    <span style={{ color: theme.palette.primary.main }}>
                      {post.group}
                    </span>
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button'
                    }}
                    anchorEl={anchorEl}
                    open={openSelectGroup}
                    onClose={handleCloseSelectGroup}
                    PaperProps={{
                      style: {
                        maxHeight: '60rem',
                        width: '30rem'
                      }
                    }}
                  >
                    {[
                      'Placeholder 1',
                      'Placeholder 2',
                      'Placeholder 3',
                      'Placeholder 4',
                      'Placeholder 5',
                      'Placeholder 6',
                      'Placeholder 7',
                      'Placeholder 8',
                      'Placeholder 9',
                      'Placeholder 10'
                    ].map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === post.group}
                        onClick={handleCloseSelectGroup}
                        style={{ fontSize: '1.5rem' }}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Header>
                <div className="post-data">
                  <TextField
                    className={classes.description}
                    InputProps={{ style: { height: '100%', fontSize: '2rem' } }}
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                  <DropzoneArea
                    acceptedFiles={['image/*']}
                    dropzoneText={'Drag and drop an image here or click'}
                    previewGridClasses={{ item: classes.previewGridDropzone }}
                    onChange={(files) => formik.setFieldValue('image', files)}
                  />
                </div>
              </Body>
            </div>
            <Options>
              <div className="option">
                <button disabled type="button">
                  <Favorite />
                  <span>{0}</span>
                </button>
              </div>
              <div className="option">
                <button disabled type="button">
                  <ChatBubbleOutline />
                  <span>{0}</span>
                </button>
              </div>
              <div className="option">
                <button disabled>
                  <Share />
                </button>
              </div>
            </Options>
          </Paper>
        </Grid>
        <Fab
          variant="extended"
          color="primary"
          size="large"
          aria-label="add"
          style={{
            fontSize: '3rem',
            position: 'fixed',
            right: '9rem',
            bottom: '9rem'
          }}
        >
          <Send
            style={{ marginRight: '0.5rem', width: 'auto', height: '2.5rem' }}
          />
          Post
        </Fab>
      </Container>
    </div>
  )
}

export default CreatePost

const Container = styled.div`
  padding: 0.5rem;
  width: 80%;
  height: 80%;
  min-height: fit-content;

  @media (max-width: 430px) {
    height: 95%;
    width: 95%;
  }

  .main-content {
    display: flex;
    height: 90%;
    width: 100%;
  }
`

const Side = styled.button`
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding-right: 16px;
  padding-left: 16px;
  background: none;
  border: none;
  text-decoration: none;
  color: unset;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #c3c3c3;
    border: none;
    font-size: 0;
  }
`

const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 16px;
  flex-direction: column;
  min-height: fit-content;

  .post-data {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: fit-content;

    * {
      font-size: 100%;
    }

    .MuiDropzonePreviewList-removeButton {
      svg {
        width: 60%;
        height: 60%;
      }
    }

    .MuiSnackbarContent-root {
      font-size: 1.2rem;
    }

    img {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      border-radius: 3rem;
      object-fit: cover;
      font-size: 0px !important;
    }

    .post-text {
      font-size: 100%;
      font-size: 1.4rem;
    }
  }
`

const Options = styled.div`
  width: 100%;
  height: 10%;
  padding-top: 0.5rem;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  cursor: default !important;
  * {
    cursor: default !important;
  }

  .option {
    padding: 0;
    max-height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    text-decoration: none;
    padding: 0.5rem;

    button {
      background: none;
      border: none;
      border-radius: 50%;
      color: ${(p) => p.theme.palette.text.secondary};
      transition: 300ms ease;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: color 200ms ease;

      svg {
        width: 3.3rem;
        height: 3.3rem;
        margin: 0 !important;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background-color 300ms ease;
      }

      span {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }
    }
  }
`

const Header = styled.div`
  width: 100%;
  color: ${(p) => p.theme.palette.text.secondary};
  display: flex;

  * {
    font-size: 1.5rem;
    cursor: pointer;
  }

  h6 {
    font-weight: bold;
    color: ${(p) => p.theme.palette.text.primary};
  }

  span {
    margin-left: 0.5rem;
  }
`
