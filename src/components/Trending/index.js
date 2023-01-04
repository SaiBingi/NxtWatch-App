import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import TrendingVideoItem from '../TrendingVideoItem'

import VideoContext from '../../context/VideoContext'

import Header from '../Header'

import SideBar from '../SideBar'

import {
  RetryButton,
  Heading,
  Description,
  Image,
  FailureContainer,
  TrendingHeading,
  TrendingView,
  VideosList,
  LoaderContainer,
  VideosContainer,
  MainContainer,
  TrendingIcon,
  IconHeading,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`

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
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
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

  onClickRetryButton = () => this.getVideos()

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

  renderVideosListView = () => {
    const {videosList} = this.state
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'
          const iconContainerColor = isDarkTheme ? '#181818' : '#ebebeb'
          const headingColor = isDarkTheme ? '#ffffff' : '#313131'

          return (
            <>
              <IconHeading iconContainerColor={iconContainerColor}>
                <TrendingIcon iconBgColor={iconBgColor} size="10" />
                <TrendingHeading headingColor={headingColor}>
                  Trending
                </TrendingHeading>
              </IconHeading>
              <VideosList>
                {videosList.map(eachVideo => (
                  <TrendingVideoItem
                    key={eachVideo.id}
                    videoDetails={eachVideo}
                  />
                ))}
              </VideosList>
            </>
          )
        }}
      </VideoContext.Consumer>
    )
  }

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
    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <MainContainer bgColor={bgColor} data-testid="trending">
              <Header />
              <VideosContainer>
                <SideBar />
                <TrendingView>{this.renderAllVideos()}</TrendingView>
              </VideosContainer>
            </MainContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Trending
