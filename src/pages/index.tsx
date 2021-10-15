import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { Add, Chat, HomeOutlined, Notifications } from '@material-ui/icons'

// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'

const Home: React.FC = () => {
  const [tab, setTab] = React.useState(0)

  return (
    <Container>
      <Header pageName="Dashboard" />
      <Body>
        <h1 style={{ fontSize: '5rem' }}>Oi</h1>
      </Body>
      <div className="nav">
        <BottomNavigation
          showLabels
          value={tab}
          onChange={(event, newValue) => {
            setTab(newValue)
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
          <BottomNavigationAction label="Post" icon={<Add />} />
          <BottomNavigationAction label="Chat" icon={<Chat />} />
          <BottomNavigationAction
            label="Notification"
            icon={<Notifications />}
          />
        </BottomNavigation>
      </div>
    </Container>
  )
}

export default Home

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
`
