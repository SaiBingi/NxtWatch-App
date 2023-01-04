import styled from 'styled-components'
import {MdWhatshot} from 'react-icons/md'

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 93vh;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83vw;
  height: 85vh;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 100vw;
    height: 92vh;
  }

  @media screen and (max-width: 575px) {
    width: 100vw;
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

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 100vw;
    height: 92vh;
  }

  @media screen and (max-width: 575px) {
    width: 100vw;
    height: 92vh;
    padding: 10px;
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

export const Heading = styled.h1`
  color: ${props => props.headingColor};
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
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

export const VideosList = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 30px 55px 20px 55px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    padding: 10px 23px;
  }

  @media screen and (max-width: 575px) {
    padding: 0px;
    margin-top: 25px;
  }
`

export const TrendingIcon = styled(MdWhatshot)`
  background-color: ${props => props.iconBgColor};
  border-radius: 50%;
  height: 70px;
  width: 70px;
  padding: 20px;
  color: #ff0000;
  margin-right: 18px;

  @media screen and (max-width: 767px) {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin-right: 14px;
  }
`

export const IconHeading = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.iconContainerColor};
  padding: 25px 20px 25px 55px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    padding: 17px 5px 14px 23px;
  }

  @media screen and (max-width: 575px) {
    padding: 15px 5px 14px 20px;
  }
`

export const TrendingView = styled.div`
  overflow: auto;
`

export const TrendingHeading = styled.h1`
  color: ${props => props.headingColor};
  margin: 0;
  font-size: 29px;

  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`
