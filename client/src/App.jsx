import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import waves from 'vanta/src/vanta.waves'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'

const client = new ApolloClient({
  cache: new InMemoryCache()
});

function App() {
  useEffect(() => {
    waves({
      el: '#root',
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00
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
