import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  Heading,
  Description,
} from './styledComponents'

import VideoContext from '../../context/VideoContext'

const GamingVideoItem = props => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme, changeNavButton} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const fontWeight = isDarkTheme ? '500' : '400'

      const {gamingVideos} = props

      const {id, thumbnailUrl, title, viewCount} = gamingVideos

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem onClick={() => changeNavButton('video-item-details')}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <Heading textColor={textColor}>{title}</Heading>
            <Description fontWeight={fontWeight} textColor={textColor}>
              {viewCount} Watching Worldwide
            </Description>
          </ListItem>
        </DetailsLink>
      )
    }}
  </VideoContext.Consumer>
)

export default GamingVideoItem
