import styled from 'styled-components'
import {MdWhatshot} from 'react-icons/md'

export const VideosContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    min-height: 92vh;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  background-color: #f9f9f9;
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

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 83vw;
  height: 87vh;

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
  width: 450px;
  height: 325px;

  @media screen and (max-width: 767px) {
    width: 320px;
    height: 270px;
  }
`

export const Heading = styled.h1`
  font-size: 22px;
  margin-top: 55px;
  color: ${props => props.headingColor};

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const Description = styled.p`
  color: ${props => props.descriptionColor};
  font-size: 15px;
  margin-top: 8px;

  @media screen and (max-width: 767px) {
    font-size: 17px;
    line-height: 1.5;
  }
`

export const SavedVideosIcon = styled(MdWhatshot)`
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

export const SavedVideosView = styled.div`
  overflow: auto;
  width: 83vw;

  @media screen and (max-width: 767px) {
    width: 100vw;
    text-align: center;
  }
`

export const SavedVideosHeading = styled.h1`
  color: ${props => props.headingColor};
  margin: 0;
  font-size: 29px;

  @media screen and (max-width: 767px) {
    font-size: 23px;
  }
`
