// Published URL  ==>  https://sainxtwatchh.ccbp.tech/

import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import VideoContext from './context/VideoContext'

class App extends Component {
  state = {
    videosList: [],
    isDarkTheme: false,
    activeNavButton: 'home',
    logoutClicked: false,
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  changeLogoutStatus = () => {
    this.setState(prevState => ({
      logoutClicked: !prevState.logoutClicked,
    }))
  }

  changeNavButton = activeNavButton => {
    this.setState({activeNavButton})
  }

  addVideoItem = video => {
    const {videosList} = this.state
    const videoObject = videosList.find(
      eachVideoItem => eachVideoItem.id === video.id,
    )
    console.log(videoObject)
    if (videoObject === undefined) {
      const updatedVideosList = [...videosList, video]
      this.setState({videosList: updatedVideosList})
    }
  }

  removeVideoItem = video => {
    const {videosList} = this.state
    const updatedList = videosList.filter(eachItem => eachItem.id !== video.id)
    this.setState({videosList: updatedList})
  }

  render() {
    const {videosList, isDarkTheme, activeNavButton, logoutClicked} = this.state
    return (
      <VideoContext.Provider
        value={{
          videosList,
          isDarkTheme,
          activeNavButton,
          logoutClicked,
          toggleTheme: this.toggleTheme,
          addVideoItem: this.addVideoItem,
          removeVideoItem: this.removeVideoItem,
          changeNavButton: this.changeNavButton,
          changeLogoutStatus: this.changeLogoutStatus,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </VideoContext.Provider>
    )
  }
}

export default App
