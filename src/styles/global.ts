import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  html {
    display: flex;
    min-height: -webkit-fill-available;
    min-width: -webkit-fill-available;
  }
  body {
    display: flex;
    min-height: 100%;
    min-width: 100%;
    color: rgb(255,179,0);
    color: linear-gradient(356deg, rgba(240,175,24,1) 0%, rgba(255,200,0,1) 75%, rgba(255,250,0,1) 100%);
    background: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    flex-wrap: wrap;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, p {
    font: 1.6rem 'Varela Round', sans-serif;
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
  #__next {
    width: 100%;
  }
`
