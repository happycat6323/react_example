import React from 'react'
import { render } from 'react-dom'

import App from './components/App.js'
import Home from './components/Home.js'

render(
    <App>
      <Home text="hihi"/>
    </App>,
    document.getElementById('root')
)

//document.getElementById('root') ���s��html���i�J�I