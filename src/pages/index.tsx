import {
  Box,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core'

import { AcUnit, AcUnitOutlined, AcUnitRounded } from '@material-ui/icons'

// eslint-disable-next-line no-use-before-define
import React from 'react'
import styled from 'styled-components'
import Body from '../components/Body'
import Header from '../components/Header'

const Home: React.FC = () => {
  const [value, setValue] = React.useState(0)

  return (
    <Container>
      <Header pageName="Dashboard" />
      <Body>
        <div className="nav">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          >
            <BottomNavigationAction label="Recents" icon={<AcUnit />} />
            <BottomNavigationAction
              label="Favorites"
              icon={<AcUnitOutlined />}
            />
            <BottomNavigationAction label="Nearby" icon={<AcUnitRounded />} />
          </BottomNavigation>
        </div>
      </Body>
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
