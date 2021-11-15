import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: unset;
    cursor: pointer !important;

    * {
      cursor: pointer !important;
    }
  }

  html {
    display: flex;
    min-height: -webkit-fill-available;
    min-width: -webkit-fill-available;
    position: fixed;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: fit-content;
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
    font: 16px 'Roboto', sans-serif;
  }
  button {
    &:hover {
      cursor: pointer;
    }
  }
  #__next {
    position: fixed;
    overflow-y: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-height: fit-content;
  }
`
