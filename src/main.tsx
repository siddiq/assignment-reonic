import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Task1 from './pages/Task1'
import Task2A from './pages/Task2A'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/assignment-reonic">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2a" element={<Task2A />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
