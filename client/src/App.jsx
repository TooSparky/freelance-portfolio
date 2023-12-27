import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import net from 'vanta/src/vanta.net'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'

const client = new ApolloClient({
  cache: new InMemoryCache()
});

function App() {
  useEffect(() => {
    net({
      el: '#root',
      speed: 1.5,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x1300d7,
      backgroundColor: 0x3e,
      points: 8.00,
      maxDistance: 18.00,
      spacing: 12.00
    })
  }, [])
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
}

export default App
