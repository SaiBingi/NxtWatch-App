import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const DetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 55px;
  margin-right: 80px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 575px) {
    margin-bottom: 22px;
  }
`

export const ListItem = styled.li`
  display: flex;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    width: 100vw;
  }
`

export const ThumbnailImage = styled.img`
  width: 340px;
  height: 185px;

  @media screen and (max-width: 575px) {
    width: 100vw;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    height: 180px;
    width: 300px;
  }
`

export const VideoProfile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 8px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const CombineRow = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 575px) {
    flex-direction: row;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 9px;
  max-width: 800px;
  line-height: 1.7;
  color: ${props => props.textColor};

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    font-size: 17px;
  }

  @media screen and (max-width: 575px) {
    font-size: 16px;
    margin-bottom: 7px;
    text-align: left;
  }
`

export const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-top: 2px;
  color: ${props => props.descriptionColor};

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 575px) {
    font-size: 14px;
    margin: 0;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 14px;

  @media screen and (max-width: 575px) {
    align-items: center;
    padding: 10px;
  }
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Dot = styled(BsDot)`
  color: ${props => props.descriptionColor};
  font-weight: bold;
  margin-top: -11px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    margin-top: -2px;
  }

  @media screen and (max-width: 575px) {
    margin-top: 2px;
  }
`

export const DotSmall = styled(BsDot)`
  color: ${props => props.descriptionColor};
  font-weight: bold;
  margin-top: 2px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`
