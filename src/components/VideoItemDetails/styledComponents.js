import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import {BiListPlus, BiDislike} from 'react-icons/bi'
import ReactPlayer from 'react-player'

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  min-height: 100vh;
`

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 65vw;
  text-align: center;

  @media screen and (max-width: 767px) {
    min-width: 100vw;
    min-height: 280px;
    padding-top: 20px;
  }
`

export const VideoPlayer = styled(ReactPlayer)`
  max-width: 60vw;
  min-height: 50vh;

  @media screen and (max-width: 767px) {
    min-width: 100vw;
    min-height: 280px;
    padding-top: 20px;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0px;
  background-color: ${props => props.bgColor};
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 18px 25px 20px 25px;

  @media screen and (max-width: 767px) {
    margin: 0;
  }
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`

export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    margin-bottom: 14px;
    margin: 0px 25px 12px 25px;
  }
`

export const ViewsAndIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Button1 = styled.button`
  display: flex;
  align-items: center;
  border: none;
  margin-left: 10px;
  background-color: transparent;
  color: ${props => props.descriptionColor};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin: 0;
    padding: 0;
    margin-right: 28px;
  }
`

export const Button2 = styled(Button1)`
  color: ${props => props.dislikeColor};
`

export const Button3 = styled(Button1)`
  color: ${props => props.savedColor};
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;

  @media screen and (max-width: 767px) {
    height: 92vh;
  }
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83vw;
  height: 85vh;

  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 92vh;
  }
`

export const Image = styled.img`
  width: 320px;
  height: 290px;

  @media screen and (max-width: 767px) {
    width: 220px;
    height: 180px;
  }
`

export const FailureHeading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const FailureDescription = styled.p`
  text-align: center;
  color: ${props => props.descriptionColor};
  font-size: 16px;
  width: 60%;
  max-width: 430px;
  line-height: 1.8;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    width: 90%;
    max-width: 288px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  padding: 11px 29px;
  margin-top: 18px;
`

export const Heading = styled.h1`
  color: #212121;
  font-weight: 400;
  font-size: 17px;
  color: ${props => props.textColor};
  margin-top: 28px;

  @media screen and (max-width: 767px) {
    margin: 28px 25px 20px 25px;
    line-height: 1.7;
    font-size: 19px;
  }
`

export const Description = styled.p`
  font-size: 15px;
  color: ${props => props.descriptionColor};
  margin: 10px 0 0 0;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`

export const IconDescription1 = styled(Description)`
  color: ${props => props.likeColor};
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 13px;
  }
`

export const IconDescription2 = styled(IconDescription1)`
  color: ${props => props.dislikeColor};
`

export const IconDescription3 = styled(IconDescription1)`
  color: ${props => props.savedColor};
`

export const NavLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-inline-start: 0;
  flex-wrap: wrap;
  list-style-type: none;
`

export const Dot = styled(BsDot)`
  color: #606060;
  font-weight: bold;
  margin: 10px 5px 0px 5px;
`

export const Icon1 = styled(AiOutlineLike)`
  margin-right: 6px;
  margin-top: 5px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`

export const Icon2 = styled(BiDislike)`
  margin-right: 6px;
  margin-top: 12px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`

export const Icon3 = styled(BiListPlus)`
  margin-right: 6px;
  cursor: pointer;
  margin-top: 9px;

  @media screen and (max-width: 767px) {
    width: 22px;
    height: 22px;
  }
`

export const HrLine = styled.hr`
  height: 2px;
  width: 100%;
  background-color: #d7dfe9;
  border: none;
  margin-top: 25px;
  margin-bottom: 35px;

  @media screen and (max-width: 767px) {
    margin: 18px 25px 42px 25px;
    width: 90%;
  }
`

export const ProfileImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;

  @media screen and (max-width: 767px) {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
`

export const ProfileName = styled.p`
  color: #212121;
  font-weight: 400;
  font-size: 17px;
  color: ${props => props.textColor};
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 19px;
  }
`

export const Subscribers = styled.p`
  color: #64748b;
  font-size: 13px;
  margin-top: 10px;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const ProfileDescriptionDesktopView = styled.p`
  @media screen and (min-width: 768px) {
    color: ${props => props.profileContentColor};
    font-size: 14px;
    line-height: 1.8;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileDescriptionMobileView = styled.p`
  @media screen and (max-width: 767px) {
    color: ${props => props.profileContentColor};
    font-size: 17px;
    line-height: 1.8;
    margin: 14px 25px 20px 25px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
