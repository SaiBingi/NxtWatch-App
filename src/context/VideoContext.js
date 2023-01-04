import React from 'react'

const VideoContext = React.createContext({
  videoList: [],
  isDarkTheme: false,
  activeNavButton: 'home',
  logoutClicked: false,
  changeLogoutStatus: () => {},
  changeNavButton: () => {},
  toggleTheme: () => {},
  addVideoItem: () => {},
  removeVideoItem: () => {},
})

export default VideoContext
