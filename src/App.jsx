import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Outlet } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import './App.css'

const client = new ApolloClient({
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
};

export default App
