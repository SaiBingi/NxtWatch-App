import Header from '../Header'
import SavedVideoItem from '../SavedVideoItem'
import VideoContext from '../../context/VideoContext'

import {
  Image,
  NotFoundContainer,
  Heading,
  MainContainer,
  VideosContainer,
  Description,
  IconHeading,
  SavedVideosIcon,
  SavedVideosHeading,
  SavedVideosView,
  VideosList,
} from './styledComponents'

import SideBar from '../SideBar'

const SavedVideos = () => (
  <VideoContext.Consumer>
    {value => {
      const {videosList, isDarkTheme} = value
      const showEmptyView = videosList.length === 0
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const headingColor = isDarkTheme ? '#ffffff' : '#181818'
      const descriptionColor = isDarkTheme ? '#f1f1f1' : '#475569'
      const iconBgColor = isDarkTheme ? '#000000' : '#d7dfe9'
      const iconContainerColor = isDarkTheme ? '#181818' : '#ebebeb'

      return (
        <>
          <Header />
          <MainContainer data-testid="savedVideos" bgColor={bgColor}>
            <VideosContainer>
              <SideBar />
              <SavedVideosView>
                {showEmptyView ? (
                  <NotFoundContainer>
                    <Image
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <Heading headingColor={headingColor}>
                      No saved videos found
                    </Heading>
                    <Description descriptionColor={descriptionColor}>
                      You can save your videos while watching them.
                    </Description>
                  </NotFoundContainer>
                ) : (
                  <>
                    <IconHeading iconContainerColor={iconContainerColor}>
                      <SavedVideosIcon iconBgColor={iconBgColor} size="10" />
                      <SavedVideosHeading headingColor={headingColor}>
                        Saved Videos
                      </SavedVideosHeading>
                    </IconHeading>

                    <VideosList>
                      {videosList.map(eachVideo => (
                        <SavedVideoItem
                          key={eachVideo.id}
                          videoDetails={eachVideo}
                        />
                      ))}
                    </VideosList>
                  </>
                )}
              </SavedVideosView>
            </VideosContainer>
          </MainContainer>
        </>
      )
    }}
  </VideoContext.Consumer>
)

export default SavedVideos
