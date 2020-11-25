import React from 'react'
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      {/* BODY */}
      <div className="row">
        <div className="column col1">
          <h1>Problem Name</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <h3>Input Format:</h3><span> It is a long established fact that a reader will be distracted by the readabl</span>
          <h3>Output Format:</h3><span>It is a long established fact that a reader will be distracted by the readabl</span>
          <h3>Constraints:</h3><span>It is a long established fact that a reader will be distracted by the readabl</span>
          <h3>Test Cases</h3>
        </div>
        <div className="column col2">
          <h1>Editor</h1>
        </div>
      </div>

    </div>
  )
}

export default App
