import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoItem from '../HomeVideoItem'
import VideoContext from '../../context/VideoContext'
import {
  HomeContainer,
  HomeContent,
  BannerSection,
  BannerContainer,
  WebsiteLogo,
  BannerContent,
  BannerButton,
  CloseBanner,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchIconContainer,
  LoaderContainer,
  Container,
  Image,
  Heading,
  Description,
  RetryButton,
  VideosList,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerClose: false,
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const formattedData = fetchedData.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  onClickCloseIcon = () => this.setState({bannerClose: true})

  onClickRetryButton = () => this.getVideos()

  onClickSearchIcon = () => this.getVideos()

  onPressKey = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

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

  renderVideosListView = () => (
    <VideoContext.Consumer>
      {value => {
        const {videosList} = this.state
        const {isDarkTheme} = value
        const shouldShowProductsList = videosList.length > 0
        const headingColor = isDarkTheme ? '#f8fafc' : '#171f46'
        const descriptionColor = isDarkTheme ? '#94a3b8' : '#424242'

        return shouldShowProductsList ? (
          <VideosList>
            {videosList.map(eachVideo => (
              <HomeVideoItem key={eachVideo.id} videoDetails={eachVideo} />
            ))}
          </VideosList>
        ) : (
          <Container>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading headingColor={headingColor}>
              No Search results found
            </Heading>
            <Description descriptionColor={descriptionColor}>
              Try different keywords or remove search.
            </Description>

            <RetryButton type="button" onClick={this.getVideos}>
              Retry
            </RetryButton>
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
          <Container>
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
          </Container>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    const {bannerClose, searchInput} = this.state

    return (
      <VideoContext>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
          const bgColorSearch = isDarkTheme ? '#181818' : '#ffffff'
          const searchIconBgColor = isDarkTheme ? '#383838' : '#f1f1f1'
          const borderColor = isDarkTheme ? '#424242' : '#cccccc'
          const textColor = isDarkTheme ? '#f8fafc' : '#212121'

          return (
            <>
              <Header />
              <HomeContainer bgColor={bgColor} data-testid="home">
                <SideBar />
                <HomeContent>
                  <BannerSection data-testid="banner" bannerClose={bannerClose}>
                    <BannerContainer>
                      <WebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerContent>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerContent>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                    <CloseBanner
                      data-testid="close"
                      onClick={this.onClickCloseIcon}
                      size="22"
                    />
                  </BannerSection>
                  <VideosContainer>
                    <SearchContainer
                      searchIconBgColor={searchIconBgColor}
                      borderColor={borderColor}
                    >
                      <SearchInput
                        type="search"
                        value={searchInput}
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                        onKeyDown={this.onPressKey}
                        bgColorSearch={bgColorSearch}
                        borderColor={borderColor}
                        textColor={textColor}
                      />
                      <SearchIconContainer
                        type="button"
                        data-testid="searchButton"
                        onClick={this.onClickSearchIcon}
                        searchIconBgColor={searchIconBgColor}
                      >
                        <SearchIcon size="18" />
                      </SearchIconContainer>
                    </SearchContainer>
                    {this.renderAllVideos()}
                  </VideosContainer>
                </HomeContent>
              </HomeContainer>
            </>
          )
        }}
      </VideoContext>
    )
  }
}

export default Home
