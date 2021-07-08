import Layout from '../components/Layout';
import '../styles/globals.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from  '@apollo/react-hooks';



function MyApp({ Component, pageProps }) {

  
const httpLink = createHttpLink({
  uri: 'http://localhost:5000/'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

  return (
     
      
      <ApolloProvider client={client}>
          <Layout>         
      <Component {...pageProps} />
      </Layout>
    </ApolloProvider>           
      
    
  )
}

export default MyApp;





