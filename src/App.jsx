import { useState } from 'react'
import './index.css'
import { motion } from 'framer-motion';
import Header from './componens/headers';
import MainHome from './componens/MainHome';
import Footer from './componens/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <MainHome />
      </div>
      <Footer />
    </>
  )
}

export default App
