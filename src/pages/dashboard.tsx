import { TextField, Typography } from '@material-ui/core'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'
import CreatePost from '../components/IndexTabs/CreatePost'
import Home from '../components/IndexTabs/Home'
import Navigation from '../components/Navigation'
import { useAuth } from '../contexts/AuthContext'
import { useLoading } from '../contexts/LoadingContext'

const Dashboard: React.FC = () => {
  const [tab, setTab] = React.useState(0)
  const { user } = useAuth()
  const { setIsLoading } = useLoading()

  useEffect(() => {
    if (!user) {
      setIsLoading(true)
    } else {
      setIsLoading(false)
    }
  }, [user])

  return user ? (
    <Container>
      <Header pageName="Dashboard">
        <div className="search-bar-container">
          <TextField
            id="password"
            name="password"
            autoComplete="disabled"
            autoFocus
            // onChange={formik.handleChange}
            // value={formik.values.password}            label="Password"
            placeholder="Search..."
            type="text"
            fullWidth
            InputProps={{
              inputProps: {
                style: { height: '2.5rem', paddingLeft: 10, fontSize: '1.2rem' }
              }
            }}
          />
        </div>
      </Header>
      <Body>
        {(() => {
          switch (tab) {
            case 0:
              return <Home />
              break
            case 1:
              return <CreatePost />
              break
            case 2:
              return <Typography variant="h2">Tab 2</Typography>
              break
            case 3:
              return <Typography variant="h2">Tab 3</Typography>
              break

            default:
              return <Typography variant="h2">No tab body</Typography>
              break
          }
        })()}
      </Body>
      <div className="nav">
        <Navigation
          value={tab}
          onChange={(event, newValue) => setTab(newValue)}
        />
      </div>
    </Container>
  ) : (
    <></>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'ifconnect.token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Dashboard

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: fit-content;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .nav {
    width: 100%;
    max-width: 100%;
    min-height: fit-content;
    position: absolute;
    bottom: 0;
    justify-content: center;
  }

  .search-bar-container {
    background: ${(p) => p.theme.palette.primary.light};
    width: 50%;
    border-radius: 0.3rem;
    margin-inline: 1rem;
  }
`
