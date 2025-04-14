import React from 'react'
import Main from './components/main/Main'
import './index.css'

const App = () => {
  return (
    <div className='app-container' style={{display: 'flex', height: '100vh',backgroundColor: 'black'}}>
      <Main/>
    </div>
  )
}

export default App