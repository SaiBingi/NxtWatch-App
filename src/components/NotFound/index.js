import Header from '../Header'
import SideBar from '../SideBar'
import VideoContext from '../../context/VideoContext'
import {
  MainContainer,
  NotFoundContainer,
  Image,
  NotFoundView,
  Heading,
  Description,
} from './styledComponents'

const NotFound = () => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const websiteImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const headingColor = isDarkTheme ? '#ffffff' : '#212121'
      const descriptionColor = isDarkTheme ? '#94a3b8' : '#616e7c'

      return (
        <MainContainer data-testid="gaming" bgColor={bgColor}>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <NotFoundView>
              <Image src={websiteImageURL} alt="not found" />
              <Heading color={headingColor}>Page Not Found</Heading>
              <Description color={descriptionColor}>
                We are sorry, the page you requested could not be found.
              </Description>
            </NotFoundView>
          </NotFoundContainer>
        </MainContainer>
      )
    }}
  </VideoContext.Consumer>
)

export default NotFound
