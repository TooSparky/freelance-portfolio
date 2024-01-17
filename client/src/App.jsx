import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import rings from 'vanta/src/vanta.rings'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'

const client = new ApolloClient({
  cache: new InMemoryCache()
});

function App() {
  useEffect(() => {
    rings({
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
