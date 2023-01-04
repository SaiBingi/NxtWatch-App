import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import VideoContext from '../../context/VideoContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  VideoContainer,
  RetryButton,
  FailureContainer,
  FailureHeading,
  FailureDescription,
  Heading,
  Image,
  Description,
  IconDescription1,
  IconDescription2,
  IconDescription3,
  MainContainer,
  VideoDetailsContainer,
  Container,
  LoaderContainer,
  RowAlign,
  Button1,
  Button2,
  Button3,
  ViewsAndIcons,
  ProfileImage,
  ColumnAlign,
  Dot,
  Icon1,
  Icon2,
  Icon3,
  HrLine,
  ProfileName,
  Subscribers,
  ProfileDescriptionDesktopView,
  ProfileDescriptionMobileView,
  VideoPlayer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    video: [],
    apiStatus: apiStatusConstants.initial,
    likeActive: false,
    dislikeActive: false,
  }

  componentDidMount() {
    this.getVideos()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  getVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

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

      const updatedData = this.formattedData(fetchedData)

      this.setState({
        video: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  activeLiked = () => {
    this.setState(prevState => ({
      likeActive: !prevState.likeActive,
      dislikeActive: false,
    }))
  }

  activeDisLiked = () => {
    this.setState(prevState => ({
      dislikeActive: !prevState.dislikeActive,
      likeActive: false,
    }))
  }

  activeSaved = (savedActive, addVideoItem, removeVideoItem) => {
    const {video} = this.state

    if (savedActive === false) {
      addVideoItem(video)
    } else {
      removeVideoItem(video)
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
            <FailureHeading headingColor={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription descriptionColor={descriptionColor}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onClickRetryButton}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </VideoContext.Consumer>
  )

  renderVideo = () => (
    <VideoContext.Consumer>
      {value => {
        const {video} = this.state
        const {isDarkTheme, removeVideoItem, addVideoItem, videosList} = value

        const {
          title,
          videoUrl,
          viewCount,
          publishedAt,
          description,
          name,
          profileImageUrl,
          subscriberCount,
        } = video

        const splitDate = publishedAt.split(',')
        const dateAndMonth = splitDate[0].split(' ')
        const year = splitDate[1]
        const month = dateAndMonth[0]
        const date = dateAndMonth[1]

        let monthNo = null

        switch (month) {
          case 'Jan':
            monthNo = 0
            break
          case 'Feb':
            monthNo = 1
            break
          case 'Mar':
            monthNo = 2
            break
          case 'Apr':
            monthNo = 3
            break
          case 'May':
            monthNo = 4
            break
          case 'Jun':
            monthNo = 5
            break
          case 'Jul':
            monthNo = 6
            break
          case 'Aug':
            monthNo = 7
            break
          case 'Sep':
            monthNo = 8
            break
          case 'Oct':
            monthNo = 9
            break
          case 'Nov':
            monthNo = 10
            break
          case 'Dec':
            monthNo = 11
            break
          default:
            break
        }

        const timeFromNow = formatDistanceToNow(
          new Date(parseInt(year), monthNo, parseInt(date)),
        )

        const splitTime = timeFromNow.split(' ')
        const getTime = splitTime.slice(1, 3)
        const formatTime = getTime.join(' ')

        const isSavedActive = videosList.find(
          eachVideo => eachVideo.id === video.id,
        )

        let savedActive

        if (isSavedActive === undefined) {
          savedActive = false
        } else {
          savedActive = true
        }

        const {likeActive, dislikeActive} = this.state
        let likeColor

        if (likeActive) {
          likeColor = '#2563eb'
        } else {
          likeColor = isDarkTheme ? '#94a3b8' : '#64748b'
        }

        let dislikeColor

        if (dislikeActive) {
          dislikeColor = '#2563eb'
        } else {
          dislikeColor = isDarkTheme ? '#94a3b8' : '#64748b'
        }

        let savedColor

        if (savedActive) {
          savedColor = '#2563eb'
        } else {
          savedColor = isDarkTheme ? '#94a3b8' : '#64748b'
        }

        const savedText = savedActive ? 'Saved' : 'Save'
        const textColor = isDarkTheme ? '#f1f5f9' : '#181818'
        const profileContentColor = isDarkTheme ? '#f8fafc' : '#616e7c'
        const descriptionColor = isDarkTheme ? '#94a3b8' : '#64748b'

        return (
          <Container data-testid="videoItemDetails">
            <VideoContainer>
              <VideoPlayer url={videoUrl} controls />
            </VideoContainer>
            <Heading textColor={textColor}>{title}</Heading>

            <ViewsAndIcons>
              <RowAlign>
                <Description descriptionColor={descriptionColor}>
                  {viewCount} views
                </Description>
                <Dot size="22" color={descriptionColor} />
                <Description descriptionColor={descriptionColor}>
                  {formatTime} ago
                </Description>
              </RowAlign>
              <RowAlign>
                <Button1 type="button" onClick={this.activeLiked}>
                  <Icon1 size="22" color={likeColor} />
                  <IconDescription1 likeColor={likeColor}>
                    Like
                  </IconDescription1>
                </Button1>
                <Button2 type="button" onClick={this.activeDisLiked}>
                  <Icon2 size="22" color={dislikeColor} />
                  <IconDescription2 dislikeColor={dislikeColor}>
                    Dislike
                  </IconDescription2>
                </Button2>
                <Button3
                  type="button"
                  onClick={() => {
                    this.activeSaved(savedActive, addVideoItem, removeVideoItem)
                  }}
                >
                  <Icon3 size="22" color={savedColor} />
                  <IconDescription3 savedColor={savedColor}>
                    {savedText}
                  </IconDescription3>
                </Button3>
              </RowAlign>
            </ViewsAndIcons>
            <HrLine />
            <RowAlign>
              <ProfileImage src={profileImageUrl} alt="channel logo" />
              <ColumnAlign>
                <ProfileName textColor={textColor}>{name}</ProfileName>
                <Subscribers>{subscriberCount} subscribers</Subscribers>
                <ProfileDescriptionDesktopView
                  profileContentColor={profileContentColor}
                >
                  {description}
                </ProfileDescriptionDesktopView>
              </ColumnAlign>
            </RowAlign>
            <ProfileDescriptionMobileView
              profileContentColor={profileContentColor}
            >
              {description}
            </ProfileDescriptionMobileView>
          </Container>
        )
      }}
    </VideoContext.Consumer>
  )

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideoDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideo()
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
            <MainContainer>
              <Header />
              <VideoDetailsContainer bgColor={bgColor}>
                <SideBar />
                {this.renderVideoDetails()}
              </VideoDetailsContainer>
            </MainContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default VideoItemDetails
