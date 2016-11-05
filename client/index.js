import React from 'react';
import ReactDOM from 'react-dom';
import { graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const network = createNetworkInterface({ uri: 'https://09a9kplbc2.execute-api.us-east-1.amazonaws.com/dev/graphql' });

const client = new ApolloClient({
  networkInterface: network,
});

const Posts = ({ params, data, state }) => {
  console.log(data);
  return (
    <div>
      { !data.loading ? <h1>Data { data.players[0].first_name }</h1> : <div>Loading!</div> }
    </div>
  );
};

const PostsData =  gql`
  {
    players {
      first_name
      last_name
    }
  }`;

const PostsWithData = graphql(PostsData)(Posts);

const App = ({ children, params, location }) => (
  <div className="container">
    <PostsWithData />
  </div>
);

ReactDOM.render((
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>),
  document.getElementById('App')
)
