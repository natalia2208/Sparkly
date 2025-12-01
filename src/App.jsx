import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Layout from './components/Layout.jsx';
import Farm from './pages/Farm.jsx';
function App() {

  return (
    <>
    <Layout>
      <Farm />
    </Layout>

    </>
  )
}

export default App
