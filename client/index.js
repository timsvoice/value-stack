import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const network = createNetworkInterface({ uri: 'https://09a9kplbc2.execute-api.us-east-1.amazonaws.com/dev/graphql' });

const client = new ApolloClient({
  networkInterface: network,
});

const App = ({ children, params, location }) => (
  <div className="container">
    <Posts />
  </div>
);

const Posts = ({ params, data, state }) => {
  console.log(data);
  return (
    <div>
      <h1>Data { data }</h1>
    </div>
  );
};

const PostsData =  gql`
  {
    post {
      name
    }
  }`;

const PostsWithData = graphql(PostsData)(Posts);

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>),
  document.getElementById('App')
)
