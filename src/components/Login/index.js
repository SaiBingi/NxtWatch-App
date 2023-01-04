import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import VideoContext from '../../context/VideoContext'
import {
  BgContainer,
  LoginContainer,
  WebsiteLogo,
  InputContainer,
  CheckboxInputContainer,
  LoginButton,
  ErrorMsg,
  InputLabel,
  Input,
  CheckboxInput,
  CheckboxLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => (
    <VideoContext.Consumer>
      {value => {
        const {username} = this.state
        const {isDarkTheme} = value
        const labelColor = isDarkTheme ? '#f1f1f1' : '#64748b'
        const inputBorderColor = isDarkTheme ? '#475569' : '#d7dfe9'
        const inputColor = isDarkTheme ? '#ffffff' : '#64748b'

        return (
          <>
            <InputLabel htmlFor="username" labelColor={labelColor}>
              USERNAME
            </InputLabel>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
              inputBorderColor={inputBorderColor}
              color={inputColor}
            />
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  renderPasswordField = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const labelColor = isDarkTheme ? '#f1f1f1' : '#64748b'
        const inputBorderColor = isDarkTheme ? '#475569' : '#d7dfe9'
        const inputColor = isDarkTheme ? '#ffffff' : '#64748b'

        const {password, showPassword} = this.state

        const inputDetails = showPassword ? 'text' : 'password'

        return (
          <>
            <InputLabel htmlFor={`${inputDetails}`} labelColor={labelColor}>
              PASSWORD
            </InputLabel>
            <Input
              type={`${inputDetails}`}
              id={`${inputDetails}`}
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
              inputBorderColor={inputBorderColor}
              color={inputColor}
            />
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  renderShowPasswordField = () => (
    <VideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const checkboxLabelColor = isDarkTheme ? '#cbd5e1' : '#0f0f0f'
        return (
          <>
            <CheckboxInput
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeCheckbox}
            />
            <CheckboxLabel htmlFor="checkbox" color={checkboxLabelColor}>
              Show Password
            </CheckboxLabel>
          </>
        )
      }}
    </VideoContext.Consumer>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <VideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const bgColor = isDarkTheme ? '#212121' : '#ffffff'
          const loginBgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const loginBoxShadow = isDarkTheme ? 'none' : '#d7dfe9'
          const websiteImageURL = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <BgContainer bgColor={bgColor}>
              <LoginContainer
                loginBgColor={loginBgColor}
                loginBoxShadow={loginBoxShadow}
                onSubmit={this.submitForm}
              >
                <WebsiteLogo src={websiteImageURL} alt="website logo" />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                <CheckboxInputContainer>
                  {this.renderShowPasswordField()}
                </CheckboxInputContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginContainer>
            </BgContainer>
          )
        }}
      </VideoContext.Consumer>
    )
  }
}

export default Login
