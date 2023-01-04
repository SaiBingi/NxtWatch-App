import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  min-width: 250px;
  flex-shrink: 0;
  padding-top: 20px;
  opacity: ${props => props.bgBlur};
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 60vh;
`

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`

export const ContactUs = styled.p`
  font-size: 16px;
  margin-left: 25px;
  font-weight: 500;
  color: ${props => props.textColor};
`

export const Description = styled.p`
  max-width: 220px;
  font-size: 16px;
  margin-left: 25px;
  font-weight: 500;
  line-height: 25px;
  color: ${props => props.textColor};
`

export const LogosImage = styled.img`
  width: 35px;
  margin: 10px;
`

export const Heading = styled.h1`
  font-size: 25px;
  font-weight: 400;
  color: ${props => props.linkColor};
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  list-style-type: none;
  color: ${props => props.linkColor};
`

export const NavLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`

export const NavButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 0;
`

export const HomeItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px 25px;
  background-color: ${props =>
    props.homeClick ? props.navBgColorClick : props.navBgColorNormal};
  color: ${props =>
    props.homeClick ? props.navColorClick : props.navColorNormal};
`

export const TrendItem = styled(HomeItem)`
  background-color: ${props =>
    props.trendClick ? props.navBgColorClick : props.navBgColorNormal};
  color: ${props =>
    props.trendClick ? props.navColorClick : props.navColorNormal};
`

export const GamingItem = styled(HomeItem)`
  background-color: ${props =>
    props.gamingClick ? props.navBgColorClick : props.navBgColorNormal};
  color: ${props =>
    props.gamingClick ? props.navColorClick : props.navColorNormal};
`

export const SavedVideosItem = styled(HomeItem)`
  background-color: ${props =>
    props.savedVideosClick ? props.navBgColorClick : props.navBgColorNormal};
  color: ${props =>
    props.savedVideosClick ? props.navColorClick : props.navColorNormal};
`

export const HomeText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: ${props => (props.homeClick ? 600 : 'lighter')};
  color: ${props => props.textColor};
  margin: 0;
  margin-left: 25px;
`

export const TrendText = styled(HomeText)`
  font-weight: ${props => (props.trendClick ? 600 : 'lighter')};
`

export const GamingText = styled(HomeText)`
  font-weight: ${props => (props.gamingClick ? 600 : 'lighter')};
`

export const SavedVideosText = styled(HomeText)`
  font-weight: ${props => (props.savedVideosClick ? 600 : 'lighter')};
`

export const Link = styled.a``
