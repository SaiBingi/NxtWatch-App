import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {BsMoon} from 'react-icons/bs'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: 'Roboto';
  padding: 25px 45px 25px 45px;
  background-color: ${props => props.bgColor};
  opacity: ${props => props.bgBlur};
  width: 100%;

  @media screen and (max-width: 767px) {
    padding: 15px;
  }
`

export const WebsiteLogoHeader = styled.img`
  width: 120px;

  @media screen and (max-width: 767px) {
    width: 95px;
  }
`

export const TriggerButton = styled.div``

export const SunIcon = styled(FiSun)`
  @media screen and (min-width: 768px) {
    height: 28px;
    width: 28px;
  }
`

export const MoonIcon = styled(BsMoon)`
  @media screen and (min-width: 768px) {
    height: 31px;
    width: 31px;
  }
`

export const LogoButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 3px;

  @media screen and (max-width: 767px) {
    margin: 0;
  }
`

export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #f1f1f1;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 9px 15px;
  outline: none;
  cursor: pointer;
  border-radius: 2px;
`

export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #64748b;
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 9px 15px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 30px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin: 20px;
  text-align: right;
  margin-left: auto;
`

export const MenuClose = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`

export const MenuContainer = styled.div`
  margin: auto;
  width: 100vw;
`

export const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 240px;

  @media screen and (max-width: 767px) {
    width: 180px;
  }
`

export const ProfileImg = styled.img`
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) {
    width: 34px;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid ${props => props.logoutButtonColor};
  color: ${props => props.logoutButtonColor};
  padding: 4px 16px 5px 16px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  border-radius: 3px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HamburgerLogoutButton = styled(FiLogOut)`
  @media screen and (max-width: 767px) {
    width: 24px;
    height: 26px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HamburgerMenuButton = styled(GiHamburgerMenu)`
  @media screen and (max-width: 767px) {
    width: 24px;
    height: 26px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;

  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`

export const AlignColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalDescription = styled.p`
  font-size: 16px;
  margin: 10px;
  color: ${props => props.modalDescriptionColor};
`

export const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`

export const IconButtonLarge = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const IconButtonSmall = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
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
  padding-left: 35%;
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
