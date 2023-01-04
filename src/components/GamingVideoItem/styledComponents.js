import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const DetailsLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
`

export const ListItem = styled.li`
  width: 240px;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 170px;
    margin-bottom: 60px;
  }

  @media screen and (max-width: 575px) {
    width: 135px;
    margin-bottom: 55px;
  }
`
export const ThumbnailImage = styled.img`
  width: 230px;
  height: 310px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 170px;
  }

  @media screen and (max-width: 575px) {
    width: 135px;
    height: 190px;
    border-radius: 10px;
  }
`

export const Heading = styled.h1`
  font-size: 17px;
  font-weight: 500;
  margin-top: 19px;
  margin-bottom: 8px;
  color: ${props => props.textColor};

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    margin-top: 13px;
  }

  @media screen and (max-width: 575px) {
    margin-top: 15px;
    font-size: 16px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: ${props => props.fontWeight};
  margin: 0;
  color: ${props => props.textColor};
  color: #475569;

  @media screen and (max-width: 575px) {
    line-height: 1.5;
    font-size: 15px;
  }
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
`

export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const RowAlign = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
