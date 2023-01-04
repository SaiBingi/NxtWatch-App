import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: ${props => props.bgColor};
`

export const LoginContainer = styled.form`
  width: 430px;
  flex-shrink: 0;
  box-shadow: 0px 8px 40px ${props => props.loginBoxShadow};
  padding: 40px 48px 64px 48px;
  text-align: center;
  border-radius: 6px;
  background-color: ${props => props.loginBgColor};

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const WebsiteLogo = styled.img`
  width: 160px;
  margin: auto;
  margin-bottom: 25px;

  @media screen and (max-width: 767px) {
    width: 130px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 100%;
  text-align: left;
`

export const CheckboxInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const InputLabel = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: ${props => props.labelColor};
`

export const CheckboxInput = styled.input`
  width: 14px;
  height: 14px;
`

export const CheckboxLabel = styled.label`
  color: ${props => props.color};
  font-weight: 500;
  font-size: 13px;
  margin-left: 4px;
`

export const Input = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid ${props => props.inputBorderColor};
  color: ${props => props.color};
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
  background-color: transparent;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 33px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ErrorMsg = styled.div`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  text-align: left;
  line-height: 16px;
  color: #ff0b37;

  @media screen and (max-width: 767px) {
    margin-top: 14px;
  }
`
