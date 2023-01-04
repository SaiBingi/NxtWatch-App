import styled from 'styled-components'

export const MainContainer = styled.div`
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
  overflow: auto;
`

export const NotFoundContainer = styled.div`
  display: flex;
  min-height: 87vh;
  overflow: auto;

  @media screen and (max-width: 767px) {
    min-height: 92vh;
  }
`

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: auto;
`

export const Image = styled.img`
  width: 450px;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    width: 450px;
  }

  @media screen and (max-width: 575px) {
    width: 80vw;
  }
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-size: 32px;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const Description = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;

  @media screen and ((min-width: 576px) and (max-width: 767px)) {
    font-size: 15px;
    max-width: 270px;
  }

  @media screen and (max-width: 575px) {
    font-size: 14px;
    max-width: 270px;
  }
`
