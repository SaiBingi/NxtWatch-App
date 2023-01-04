import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {IoClose} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import VideoContext from '../../context/VideoContext'

import {
  NavButton,
  NavLinksList,
  NavLink,
  HomeText,
  TrendText,
  GamingText,
  SavedVideosText,
} from '../SideBar/styledComponents'

import {
  HeaderContainer,
  MenuContainer,
  HomeItem,
  TrendItem,
  GamingItem,
  SavedVideosItem,
  WebsiteLogoHeader,
  HeaderIcons,
  ProfileImg,
  LogoutButton,
  HamburgerMenuButton,
  HamburgerLogoutButton,
  ModalContainer,
  ConfirmButton,
  ModalDescription,
  AlignColumn,
  AlignRow,
  CloseButton,
  CancelButton,
  LogoButton,
  IconButton,
  IconButtonLarge,
  IconButtonSmall,
  TriggerButton,
  MenuClose,
  SunIcon,
  MoonIcon,
} from './styledComponents'

const Header = props => (
  <VideoContext.Consumer>
    {value => {
      const {
        isDarkTheme,
        toggleTheme,
        changeNavButton,
        logoutClicked,
        activeNavButton,
      } = value

      const onChangeTheme = () => toggleTheme()

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const bgBlur = logoutClicked ? '0.9' : '1'
      const bgColor = isDarkTheme ? '#212121' : '#ffffff'
      const closeIconColor = isDarkTheme ? '#ffffff' : '#212121'
      const logoutButtonColor = isDarkTheme ? '#ffffff' : '#3b82f6'
      const websiteLogoURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const modalBgColor = isDarkTheme ? '#313131' : '#f1f5f9'
      const modalDescriptionColor = isDarkTheme ? '#f1f5f9' : '#00306e'
      const hamburgerButtonColor = isDarkTheme ? '#ffffff' : '#0f0f0f'
      const loginBoxShadow = isDarkTheme ? 'none' : '#909090'

      const overlayStyle = {
        backgroundColor: `${modalBgColor}`,
        fontFamily: 'Roboto',
        borderRadius: '8px',
        boxShadow: `2px 2px 5px ${loginBoxShadow}`,
        width: '380px',
        height: '180px',
        margin: 'auto',
      }

      const overlayStyleMenu = {
        backgroundColor: `${modalBgColor}`,
        fontFamily: 'Roboto',
        borderRadius: '8px',
      }

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
        <HeaderContainer bgBlur={bgBlur} bgColor={bgColor}>
          <NavLink to="/">
            <LogoButton onClick={() => changeNavButton('home')}>
              <WebsiteLogoHeader src={websiteLogoURL} alt="website logo" />
            </LogoButton>
          </NavLink>
          <HeaderIcons>
            <IconButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <SunIcon size="25" color="#ffffff" />
              ) : (
                <MoonIcon size="25" />
              )}
            </IconButton>
            <IconButtonLarge type="button">
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </IconButtonLarge>
            <Popup
              modal
              overlayStyle={overlayStyleMenu}
              trigger={
                <IconButtonSmall type="button">
                  <HamburgerMenuButton color={hamburgerButtonColor} />
                </IconButtonSmall>
              }
            >
              {close => (
                <MenuClose>
                  <CloseButton type="button" onClick={() => close()}>
                    <IoClose size="28" color={closeIconColor} />
                  </CloseButton>
                  <MenuContainer bgBlur={bgBlur} bgColor={bgColor}>
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
                            savedVideosClick={
                              activeNavButton === 'saved-videos'
                            }
                          >
                            <BiListPlus size="18" />
                            <SavedVideosText
                              textColor={textColor}
                              savedVideosClick={
                                activeNavButton === 'saved-videos'
                              }
                            >
                              Saved Videos
                            </SavedVideosText>
                          </SavedVideosItem>
                        </NavButton>
                      </NavLink>
                    </NavLinksList>
                  </MenuContainer>
                </MenuClose>
              )}
            </Popup>
            <Popup
              modal
              overlayStyle={overlayStyle}
              trigger={
                <TriggerButton>
                  <LogoutButton
                    type="button"
                    logoutButtonColor={logoutButtonColor}
                    data-testid="iconButton"
                  >
                    Logout
                  </LogoutButton>
                  <IconButtonSmall type="button">
                    <HamburgerLogoutButton color={hamburgerButtonColor} />
                  </IconButtonSmall>
                </TriggerButton>
              }
            >
              {close => (
                <ModalContainer>
                  <AlignColumn>
                    <ModalDescription
                      modalDescriptionColor={modalDescriptionColor}
                    >
                      Are you sure you want to logout?
                    </ModalDescription>
                    <AlignRow>
                      <CancelButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        Cancel
                      </CancelButton>

                      <ConfirmButton type="button" onClick={onClickLogout}>
                        Confirm
                      </ConfirmButton>
                    </AlignRow>
                  </AlignColumn>
                </ModalContainer>
              )}
            </Popup>
          </HeaderIcons>
        </HeaderContainer>
      )
    }}
  </VideoContext.Consumer>
)

export default withRouter(Header)
