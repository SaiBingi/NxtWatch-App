import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'
import VideoContext from '../../context/VideoContext'
import {
  SideBarContainer,
  NavButton,
  NavLink,
  HomeText,
  TrendText,
  GamingText,
  SavedVideosText,
  NavLinksList,
  HomeItem,
  TrendItem,
  GamingItem,
  SavedVideosItem,
  BottomContainer,
  SocialContainer,
  ImageContainer,
  ContactUs,
  Description,
  LogosImage,
  Link,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <VideoContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            activeNavButton,
            changeNavButton,
            logoutClicked,
          } = value

          const bgBlur = logoutClicked ? '0.9' : '1'
          const bgColor = isDarkTheme ? '#212121' : '#ffffff'
          const textColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
          let navBgColorClick
          let navBgColorNormal
          let navColorClick
          let navColorNormal

          if (isDarkTheme) {
            navBgColorClick = '#383838'
            navBgColorNormal = 'transparent'
            navColorClick = '#ff0000'
            navColorNormal = '#cccccc'
          } else {
            navBgColorClick = '#e2e8f0'
            navBgColorNormal = 'transparent'
            navColorClick = '#ff0000'
            navColorNormal = '#475569'
          }

          return (
            <SideBarContainer bgBlur={bgBlur} bgColor={bgColor}>
              <NavLinksList>
                <NavLink to="/">
                  <NavButton
                    type="button"
                    onClick={() => changeNavButton('home')}
                  >
                    <HomeItem
                      navBgColorClick={navBgColorClick}
                      navBgColorNormal={navBgColorNormal}
                      navColorClick={navColorClick}
                      navColorNormal={navColorNormal}
                      homeClick={activeNavButton === 'home'}
                    >
                      <AiFillHome size="18" />
                      <HomeText
                        textColor={textColor}
                        homeClick={activeNavButton === 'home'}
                      >
                        Home
                      </HomeText>
                    </HomeItem>
                  </NavButton>
                </NavLink>
                <NavLink to="/trending">
                  <NavButton
                    type="button"
                    onClick={() => changeNavButton('trend')}
                  >
                    <TrendItem
                      navBgColorClick={navBgColorClick}
                      navBgColorNormal={navBgColorNormal}
                      navColorClick={navColorClick}
                      navColorNormal={navColorNormal}
                      trendClick={activeNavButton === 'trend'}
                    >
                      <MdWhatshot size="18" />
                      <TrendText
                        textColor={textColor}
                        trendClick={activeNavButton === 'trend'}
                      >
                        Trending
                      </TrendText>
                    </TrendItem>
                  </NavButton>
                </NavLink>
                <NavLink to="/gaming">
                  <NavButton
                    type="button"
                    onClick={() => changeNavButton('gaming')}
                  >
                    <GamingItem
                      navBgColorClick={navBgColorClick}
                      navBgColorNormal={navBgColorNormal}
                      navColorClick={navColorClick}
                      navColorNormal={navColorNormal}
                      gamingClick={activeNavButton === 'gaming'}
                    >
                      <SiYoutubegaming size="18" />
                      <GamingText
                        textColor={textColor}
                        gamingClick={activeNavButton === 'gaming'}
                      >
                        Gaming
                      </GamingText>
                    </GamingItem>
                  </NavButton>
                </NavLink>
                <NavLink to="/saved-videos">
                  <NavButton
                    type="button"
                    onClick={() => changeNavButton('saved-videos')}
                  >
                    <SavedVideosItem
                      navBgColorClick={navBgColorClick}
                      navBgColorNormal={navBgColorNormal}
                      navColorClick={navColorClick}
                      navColorNormal={navColorNormal}
                      savedVideosClick={activeNavButton === 'saved-videos'}
                    >
                      <BiListPlus size="18" />
                      <SavedVideosText
                        textColor={textColor}
                        savedVideosClick={activeNavButton === 'saved-videos'}
                      >
                        Saved Videos
                      </SavedVideosText>
                    </SavedVideosItem>
                  </NavButton>
                </NavLink>
              </NavLinksList>
              <BottomContainer>
                <SocialContainer>
                  <ContactUs textColor={textColor}> CONTACT US</ContactUs>
                  <ImageContainer>
                    <Link href="https://www.facebook.com/profile.php?id=100088945400758" target="__blank">
                      <LogosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                        alt="facebook logo"
                      />
                    </Link>
                    <Link href="https://twitter.com/SaiBingi3" target="__blank">
                      <LogosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                        alt="twitter logo"
                      />
                    </Link>
                    <Link href="https://linkedin.com/in/sai-bingi" target="__blank">
                      <LogosImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                        alt="linked in logo"
                      />
                    </Link>
                  </ImageContainer>
                  <Description textColor={textColor}>
                    Enjoy! Now to see your channels and recommendations!
                  </Description>
                </SocialContainer>
              </BottomContainer>
            </SideBarContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
