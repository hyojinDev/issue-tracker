import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import { render } from 'react-dom'
import axios from 'axios'
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import App from '@layouts/App'
import { BrowserRouter } from 'react-router-dom'
import Layout from '@components/Layout'

axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://localhost:3090' : 'http://localhost:3090'
axios.defaults.baseURL = 'http://localhost:3090'

render(
  <BrowserRouter>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#app'),
)
