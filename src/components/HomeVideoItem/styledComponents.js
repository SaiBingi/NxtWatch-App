import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {BsDot} from 'react-icons/bs'

export const DetailsLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`

export const ListItem = styled.li`
  width: 320px;
  margin-bottom: 60px;

  @media screen and (max-width: 575px) {
    margin-right: 0;
    width: 100%;
    margin-bottom: 10px;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 42vw;
  }
`
export const ThumbnailImage = styled.img`
  width: 310px;
  height: 170px;

  @media screen and (max-width: 575px) {
    width: 100vw;
  }

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 42vw;
  }
`

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;

  @media screen and (max-width: 575px) {
    padding: 10px;
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @media screen and (max-width: 575px) {
    width: 36px;
    height: 36px;
  }
`

export const Heading = styled.h1`
  font-size: 16px;
  line-height: 1.5;
  max-width: 250px;
  font-weight: 400;
  margin: 0;
  color: ${props => props.headingColor};

  @media screen and (max-width: 575px) {
    font-size: 14px;
  }
`

export const Description = styled.p`
  font-size: 15px;
  color: ${props => props.descriptionColor};
  margin: 10px 0 0 0;

  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
`

export const Dot = styled(BsDot)`
  color: #606060;
  font-weight: bold;
  margin: 10px 5px 0px 5px;
`

export const DotSmall = styled(BsDot)`
  color: #606060;
  font-weight: bold;
  margin: 10px 5px 0px 5px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`

export const CombineRow = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 575px) {
    flex-direction: row;
    align-items: center;
  }
`

export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
