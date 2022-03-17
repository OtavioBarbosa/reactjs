import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import './assets/styles/style.scss'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Layout/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)