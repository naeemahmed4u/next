import Layout from '../components/Layout';
import '../styles/globals.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from 'apollo-upload-client';
import { ApolloLink } from '@apollo/client';




function MyApp({ Component, pageProps }) {

  const uploadLink = createUploadLink({ uri: 'http://localhost:5000/graphql' });

  // const httpLink = createHttpLink({
  //   uri: 'http://localhost:5000/graphql'
  // })

  const client = new ApolloClient({
    // link: ApolloLink.from([ httpLink, uploadLink ]),
    link: uploadLink,
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





