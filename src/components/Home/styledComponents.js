import {IoCloseOutline} from 'react-icons/io5'
import {MdSearch} from 'react-icons/md'
import styled from 'styled-components'

export const HomeContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  position: relative;
  max-height: 93vh;
  background-color: ${props => props.bgColor};
`

export const HomeContent = styled.div`
  width: 100%;
  overflow: auto;
`

export const BannerSection = styled.div`
  display: ${props => (props.bannerClose ? 'none' : 'flex')};
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-color: #ffffff;
  padding: 32px;

  @media screen and (max-width: 575px) {
    padding: 25px;
  }
`

export const BannerContainer = styled.div``

export const WebsiteLogo = styled.img`
  width: 140px;

  @media screen and (max-width: 575px) {
    width: 120px;
  }

  @media screen and (min-width: 576px and max-width: 767px) {
    width: 130px;
  }
`

export const BannerContent = styled.p`
  color: #231f20;
  font-size: 17px;
  width: 330px;
  line-height: 28px;

  @media screen and (max-width: 575px) {
    width: 220px;
    font-size: 16px;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    font-weight: 500;
  }
`

export const BannerButton = styled.button`
  font-family: 'Roboto';
  background-color: transparent;
  margin-top: 10px;
  border: 1px solid #231f20;
  font-weight: 500;
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 575px) {
    font-size: 13px;
    padding: 8px 13px;
  }
`

export const CloseBanner = styled(IoCloseOutline)`
  cursor: pointer;
`

export const VideosContainer = styled.div`
  padding: 25px;

  @media screen and (max-width: 575px) {
    padding: 0;
    margin: 0;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  border: 1px solid ${props => props.borderColor};
  background-color: ${props => props.searchIconBgColor};

  @media screen and (max-width: 575px) {
    margin: 15px;
    width: 90%;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 70%;
  }
`

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  padding: 8px 12px;
  color: ${props => props.textColor};
  border-right: 2px solid ${props => props.borderColor};
  background-color: ${props => props.bgColorSearch};
`

export const SearchIconContainer = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: ${props => props.searchIconBgColor};
`

export const SearchIcon = styled(MdSearch)`
  color: #606060;
  margin-left: 23px;
  margin-right: 23px;

  @media screen and (max-width: 575px) {
    margin-left: 18px;
    margin-right: 18px;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 50vh;

  @media screen and (max-width: 767px) {
    height: 55vh;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  padding-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 575px) {
    padding: 10px;
  }

  @media screen and (max-width: 767px) {
    height: 51vh;
  }
`

export const Image = styled.img`
  width: 400px;
  height: 350px;

  @media screen and (max-width: 575px) {
    width: 250px;
    height: 200px;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 300px;
    height: 230px;
  }
`

export const Heading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  text-align: center;
  color: ${props => props.descriptionColor};
  font-size: 16px;
  width: 60%;
  max-width: 420px;
  line-height: 1.8;
  margin: 0;

  @media screen and (max-width: 575px) {
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

export const VideosList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 33px;
`
