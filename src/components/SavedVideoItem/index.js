import {formatDistanceToNow} from 'date-fns'
import VideoContext from '../../context/VideoContext'
import {
  DetailsLink,
  ListItem,
  ThumbnailImage,
  ContentSection,
  Heading,
  Description,
  ColumnAlign,
  RowAlign,
  Dot,
  DotSmall,
  CombineRow,
  VideoProfile,
} from './styledComponents'

const SavedVideoItem = props => (
  <VideoContext.Consumer>
    {value => {
      const {isDarkTheme, changeNavButton} = value
      const textColor = isDarkTheme ? '#f9f9f9' : '#181818'
      const {videoDetails} = props

      const {
        id,
        name,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        profileImageUrl,
      } = videoDetails

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
      const descriptionColor = isDarkTheme ? '#64748b' : '#606060'

      return (
        <DetailsLink to={`/videos/${id}`}>
          <ListItem onClick={() => changeNavButton('video-item-details')}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ContentSection>
              <VideoProfile src={profileImageUrl} />
              <ColumnAlign>
                <Heading textColor={textColor}>{title}</Heading>
                <CombineRow>
                  <Description descriptionColor={descriptionColor}>
                    {name}
                  </Description>
                  <DotSmall size="21" descriptionColor={descriptionColor} />
                  <RowAlign>
                    <Description descriptionColor={descriptionColor}>
                      {viewCount} views
                    </Description>
                    <Dot size="21" descriptionColor={descriptionColor} />
                    <Description descriptionColor={descriptionColor}>
                      {formatTime} ago
                    </Description>
                  </RowAlign>
                </CombineRow>
              </ColumnAlign>
            </ContentSection>
          </ListItem>
        </DetailsLink>
      )
    }}
  </VideoContext.Consumer>
)

export default SavedVideoItem
