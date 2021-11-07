/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react' // eslint-disable-line no-use-before-define
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { HomeOutlined, Add, Chat, Notifications } from '@material-ui/icons'

interface NavigationProps {
  value: any
  onChange: (event: React.ChangeEvent<{}>, value: any) => void
}

const Navigation: React.FC<NavigationProps> = ({ value, onChange }) => {
  return (
    <BottomNavigation showLabels value={value} onChange={onChange}>
      <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
      <BottomNavigationAction label="Post" icon={<Add />} />
      <BottomNavigationAction label="Chat" icon={<Chat />} />
      <BottomNavigationAction label="Notification" icon={<Notifications />} />
    </BottomNavigation>
  )
}

export default Navigation
