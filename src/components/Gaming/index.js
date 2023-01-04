import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import SideBar from '../SideBar'

import VideoContext from '../../context/VideoContext'

import {
  RetryButton,
  FailureContainer,
  Heading,
  Description,
  Image,
  VideosList,
  GamingView,
  IconHeading,
  GamingIcon,
  GamingHeading,
  LoaderContainer,
  MainContainer,
  VideosContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  onClickRetryButton = () => this.getVideos()

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      //   console.log(fetchedData)

      const updatedData = fetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImageURL = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const headingColor = isDarkTheme ? '#f8fafc' : '#171f46'
        const descriptionColor = isDarkTheme ? '#94a3b8' : '#424242'

        return (
          <FailureContainer>
            <Image src={failureImageURL} alt="failure view" />
            <Heading headingColor={headingColor}>
              Oops! Something Went Wrong
            </Heading>
            <Description descriptionColor={descriptionColor}>
              We are having some trouble to complete your request. Please try
              again.
            </Description>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderVideosListView = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'
        const iconContainerColor = isDarkTheme ? '#181818' : '#ebebeb'
        const headingColor = isDarkTheme ? '#ffffff' : '#313131'
        const {videosList} = this.state

        return (
          <>
            <IconHeading iconContainerColor={iconContainerColor}>
              <GamingIcon iconBgColor={iconBgColor} size="10" />
              <GamingHeading headingColor={headingColor}>Gaming</GamingHeading>
            </IconHeading>
            <VideosList>
              {videosList.map(eachVideo => (
                <GamingVideoItem gamingVideos={eachVideo} key={eachVideo.id} />
              ))}
            </VideosList>
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosListView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    // console.log(videosList)

    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <MainContainer data-testid="gaming" bgColor={bgColor}>
              <Header />
              <VideosContainer>
                <SideBar />
                <GamingView>{this.renderAllVideos()}</GamingView>
              </VideosContainer>
            </MainContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Gaming
